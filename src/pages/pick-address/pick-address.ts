import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EnderecosDTO } from "../../models/enderecos.dto";
import { StorageService } from "../../services/storage.service";
import { UsuarioService } from "../../services/domain/usuario.service";
import { PedidosDTO } from "../../models/pedidos.dto";
import { CartService } from "../../services/domain/cart.service";
import { ItemDTO } from "../../models/item.dto";
import { ItemPedidoDTO } from "../../models/item-pedido.dto";

@IonicPage()
@Component({
  selector: "page-pick-address",
  templateUrl: "pick-address.html",
})
export class PickAddressPage {
  items: ItemPedidoDTO;
  pedido: PedidosDTO;
  endereco: EnderecosDTO;
  item: ItemDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public cartService: CartService
  ) {}

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email).subscribe((response) => {
        this.items = response["item-pedido"];

        //      let cart = this.cartService.getCart();
        this.pedido = {
          id: response["id"],
          endereco: response["endereco"],
          item: response["item"],
          itens: response["item-pedido"],
        };
      }),
        (error) => {
          if (error.status == 403) {
            this.navCtrl.setRoot("MenuPage");
          }
        };
    } else {
      this.navCtrl.setRoot("MenuPage");
    }
  }

  nextPage(item: EnderecosDTO) {
    this.navCtrl.push("OrderConfirmationPage", { pedido: this.pedido });
  }
}
