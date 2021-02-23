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
import { StorageService } from "../../services/storage.service";
import { UsuarioService } from "../../services/domain/usuario.service";
import { CartService } from "../../services/domain/cart.service";
var PickAddressPage = (function () {
    function PickAddressPage(navCtrl, navParams, storage, usuarioService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.cartService = cartService;
    }
    PickAddressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email).subscribe(function (response) {
                _this.items = response["enderecos"];
                var cart = _this.cartService.getCart();
                _this.pedido = {
                    usuarios: { id: response["id"] },
                    endereco: null,
                    pagamento: null,
                    entrega: null,
                    itens: null,
                    item: cart.items.map(function (x) {
                        return {
                            quantidade: x.quantidade,
                            produto: { id: x.produto.id },
                        };
                    }),
                };
            }, function (error) {
                if (error.status == 403) {
                    _this.navCtrl.setRoot("MenuPage");
                }
            });
        }
        else {
            this.navCtrl.setRoot("MenuPage");
        }
    };
    PickAddressPage.prototype.nextPage = function (item) {
        this.pedido.enderecoDeEntrega = { id: item.id };
        this.navCtrl.push("OrderPayPage", { pedido: this.pedido });
    };
    PickAddressPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-pick-address",
            templateUrl: "pick-address.html",
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            StorageService,
            UsuarioService,
            CartService])
    ], PickAddressPage);
    return PickAddressPage;
}());
export { PickAddressPage };
//# sourceMappingURL=pick-address.js.map