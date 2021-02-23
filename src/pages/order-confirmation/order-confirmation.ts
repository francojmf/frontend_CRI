import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
} from "ionic-angular";
import { PedidosDTO } from "../../models/pedidos.dto";
import { CartItem } from "../../models/cart-item";
import { EnderecosDTO } from "../../models/enderecos.dto";
import { UsuarioDTO } from "../../models/usuario.dto";
import { UsuarioService } from "../../services/domain/usuario.service";
import { CartService } from "../../services/domain/cart.service";
import { PedidoService } from "../../services/domain/pedido.service";

@IonicPage()
@Component({
  selector: "page-order-confirmation",
  templateUrl: "order-confirmation.html",
})
export class OrderConfirmationPage {
  pedido: PedidosDTO;
  cartItems: CartItem[];
  usuario: UsuarioDTO;
  endereco: EnderecosDTO;
  codpedido: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuarioService: UsuarioService,
    public cartService: CartService,
    public pedidoService: PedidoService,
    public loadingCtrl: LoadingController
  ) {
    this.pedido = this.navParams.get("pedido");
  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items;
    this.usuarioService.findById(this.usuario.id).subscribe(
      (response) => {
        this.usuario = response as UsuarioDTO;
        this.endereco = this.findEndereco(
          this.pedido.endereco.id,
          response["enderecos"]
        );
      },
      (error) => {
        this.navCtrl.setRoot("MenuPage");
      }
    );
  }

  private findEndereco(id: string, list: EnderecosDTO[]): EnderecosDTO {
    let position = list.findIndex((x) => x.id == id);
    return list[position];
  }

  total(): number {
    return this.cartService.total();
  }

  back() {
    this.navCtrl.setRoot("CartPage");
  }

  home() {
    this.navCtrl.setRoot("MenuPage");
  }

  checkout() {
    let loader = this.presentLoading();
    this.pedidoService.insert(this.pedido).subscribe(
      (response) => {
        this.cartService.createOrClearCart();
        this.codpedido = this.extractId(response.headers.get("location"));
        loader.dismiss();
      },
      (error) => {
        this.navCtrl.setRoot("MenuPage");
      }
    );
  }

  private extractId(location: string): string {
    let position = location.lastIndexOf("/");
    return location.substring(position + 1, location.length);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    loader.present();
    return loader;
  }
}
