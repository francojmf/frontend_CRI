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
import { IonicPage, NavController, MenuController } from "ionic-angular";
import { UsuarioService } from "../../services/domain/usuario.service";
var ListagemPage = (function () {
    function ListagemPage(navCtrl, usuarioService, menu) {
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.menu = menu;
    }
    ListagemPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.usuarioService.findAll().subscribe(function (response) {
            _this.usuarios = response;
        }, function (error) {
            _this.navCtrl.setRoot("MenuPage");
        });
    };
    ListagemPage.prototype.backMenu = function () {
        this.navCtrl.push("MenuPage");
    };
    ListagemPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-listagem",
            templateUrl: "listagem.html",
        }),
        __metadata("design:paramtypes", [NavController,
            UsuarioService,
            MenuController])
    ], ListagemPage);
    return ListagemPage;
}());
export { ListagemPage };
//# sourceMappingURL=listagem.js.map