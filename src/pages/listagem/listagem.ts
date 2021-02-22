import { Component } from "@angular/core";
import { IonicPage, NavController, MenuController } from "ionic-angular";
import { UsuarioDTO } from "../../models/usuario.dto";
import { UsuarioService } from "../../services/domain/usuario.service";

@IonicPage()
@Component({
  selector: "page-listagem",
  templateUrl: "listagem.html",
})
export class ListagemPage {
  usuarios: UsuarioDTO[];

  constructor(
    public navCtrl: NavController,
    public usuarioService: UsuarioService,
    public menu: MenuController
  ) {}

  ionViewDidLoad() {
    this.usuarioService.findAll().subscribe(
      (response) => {
        this.usuarios = response;
      },
      (error) => {
        this.navCtrl.setRoot("MenuPage");
      }
    );
  }

  backMenu() {
    this.navCtrl.push("MenuPage");
  }
}
