var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../services/domain/produto.service';
import { API_CONFIG } from '../../config/api.config';
import { CartService } from '../../services/domain/cart.service';
var CartPage = (function () {
    function CartPage(navCtrl, navParams, cartService, produtoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.produtoService = produtoService;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var cart = this.cartService.getCart();
        this.items = cart.items;
        this.loadImageUrls();
    };
    CartPage.prototype.loadImageUrls = function () {
        var _loop_1 = function () {
            var item = this_1.items[i];
            this_1.produtoService.getSmallImageFromBucket(item.produto.id)
                .subscribe(function (response) {
                item.produto.imageUrl = API_CONFIG.bucketBaseUrl + "/prod" + item.produto.id + "-small.jpg";
            }, function (error) { });
        };
        var this_1 = this;
        for (var i = 0; i < this.items.length; i++) {
            _loop_1();
        }
    };
    CartPage.prototype.removeItem = function (produto) {
        this.items = this.cartService.removeProduto(produto).items;
    };
    CartPage.prototype.increaseQuantity = function (produto) {
        this.items = this.cartService.increaseQuantity(produto).items;
    };
    CartPage.prototype.decreaseQuantity = function (produto) {
        this.items = this.cartService.decreaseQuantity(produto).items;
    };
    CartPage.prototype.total = function () {
        return this.cartService.total();
    };
    CartPage.prototype.goOn = function () {
        this.navCtrl.setRoot('CategoriasPage');
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.push('PickAddressPage');
        //  this.navCtrl.push('MenuPage');
    };
    CartPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cart',
            templateUrl: 'cart.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CartService,
            ProdutoService])
    ], CartPage);
    return CartPage;
}());
export { CartPage };
//# sourceMappingURL=cart.js.map