import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";

@Component({
  selector: "page-edit",
  templateUrl: "edit.html",
})
export class EditPage {
  public usuarios;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.usuarios = [];
  }

  backMenu() {
    this.navCtrl.push("MenuPage");
  }
}
