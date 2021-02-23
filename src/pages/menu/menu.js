var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { MenuController } from "ionic-angular/components/app/menu-controller";
var MenuPage = (function () {
    function MenuPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    MenuPage.prototype.order = function () {
        this.navCtrl.setRoot("CategoriasPage");
    };
    MenuPage.prototype.usuarios = function () {
        this.navCtrl.setRoot("ListagemPage");
    };
    MenuPage.prototype.pedidos = function () {
        this.navCtrl.setRoot("ListPage");
    };
    MenuPage.prototype.profile = function () {
        this.navCtrl.setRoot("ProfilePage");
    };
    MenuPage.prototype.profile2 = function () {
        this.navCtrl.setRoot("Profile2Page");
    };
    MenuPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-menu",
            templateUrl: "menu.html",
        }),
        __metadata("design:paramtypes", [NavController, MenuController])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.js.map