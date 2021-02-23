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
import { FormBuilder } from '@angular/forms';
var ProdutoDetailPage = (function () {
    function ProdutoDetailPage(navCtrl, navParams, formBuilder, produtoService, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.produtoService = produtoService;
        this.cartService = cartService;
        this.formGroup = this.formBuilder.group({
            nome: ['Nome da criança', []],
            med_a: ['36', []],
            med_b: ['25', []],
            med_c: ['30', []],
            med_d: ['28', []],
            med_e: ['14', []],
            med_f: ['25', []],
            descricao: ['Descreva resumidamente a limitação da criança.', []]
        });
    }
    ProdutoDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var produto_id = this.navParams.get('produto_id');
        this.produtoService.findById(produto_id)
            .subscribe(function (response) {
            _this.item = response;
            _this.getImageUrlIfExists();
        }, function (error) { });
    };
    ProdutoDetailPage.prototype.getImageUrlIfExists = function () {
        var _this = this;
        this.produtoService.getImageFromBucket(this.item.id)
            .subscribe(function (response) {
            _this.item.imageUrl = API_CONFIG.bucketBaseUrl + "/prod" + _this.item.id + ".jpg";
        }, function (error) { });
    };
    ProdutoDetailPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.setRoot('CartPage');
        //    this.navCtrl.setRoot('DeliveryPage');
        //    this.navCtrl.setRoot('PickAddressPage');
    };
    ProdutoDetailPage.prototype.back = function () {
        this.navCtrl.push('IndexPage');
    };
    ProdutoDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produto-detail',
            templateUrl: 'produto-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder,
            ProdutoService,
            CartService])
    ], ProdutoDetailPage);
    return ProdutoDetailPage;
}());
export { ProdutoDetailPage };
//# sourceMappingURL=produto-detail.js.map