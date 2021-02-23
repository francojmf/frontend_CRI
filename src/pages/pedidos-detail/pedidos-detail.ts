import { ItemPedidoDTO } from "./../../models/item-pedido.dto";
import { EnderecosDTO } from "./../../models/enderecos.dto";
import { PedidoService } from "./../../services/domain/pedido.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-pedidos-detail",
  templateUrl: "pedidos-detail.html",
})
export class PedidosDetailPage {
  id: string;
  data: string;
  endereco: EnderecosDTO;
  itens: ItemPedidoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pedidoService: PedidoService
  ) {}

  ionViewDidLoad() {
    //   let id = this.navParams.get("id");
    this.pedidoService.findOrderById(this.id).subscribe(
      (response) => {
        this.id = response["id"];
        this.data = response["instante"];
        this.itens = response["itens"];
        this.endereco = response["enderecoDeEntrega"];
      },
      (error) => {}
    );
  }
}
