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
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UsuarioService } from "../../services/domain/usuario.service";
import { CartService } from "../../services/domain/cart.service";
import { PedidoService } from "../../services/domain/pedido.service";
var OrderConfirmationPage = (function () {
    function OrderConfirmationPage(navCtrl, navParams, usuarioService, cartService, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioService = usuarioService;
        this.cartService = cartService;
        this.pedidoService = pedidoService;
        this.pedido = this.navParams.get("pedido");
    }
    OrderConfirmationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cartItems = this.cartService.getCart().items;
        this.usuarioService.findById(this.usuario.id).subscribe(function (response) {
            _this.usuario = response;
            _this.endereco = _this.findEndereco(_this.pedido.enderecoDeEntrega.id, response["enderecos"]);
        }, function (error) {
            _this.navCtrl.setRoot("MenuPage");
        });
    };
    OrderConfirmationPage.prototype.findEndereco = function (id, list) {
        var position = list.findIndex(function (x) { return x.id == id; });
        return list[position];
    };
    OrderConfirmationPage.prototype.total = function () {
        return this.cartService.total();
    };
    OrderConfirmationPage.prototype.back = function () {
        this.navCtrl.setRoot("CartPage");
    };
    OrderConfirmationPage.prototype.home = function () {
        this.navCtrl.setRoot("MenuPage");
    };
    OrderConfirmationPage.prototype.checkout = function () {
        this.navCtrl.setRoot("MenuPage");
    };
    OrderConfirmationPage.prototype.extractId = function (location) {
        var position = location.lastIndexOf("/");
        return location.substring(position + 1, location.length);
    };
    OrderConfirmationPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-order-confirmation",
            templateUrl: "order-confirmation.html",
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            UsuarioService,
            CartService,
            PedidoService])
    ], OrderConfirmationPage);
    return OrderConfirmationPage;
}());
export { OrderConfirmationPage };
//# sourceMappingURL=order-confirmation.js.map