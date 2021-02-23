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
import { API_CONFIG } from '../../config/api.config';
import { ProdutoService } from '../../services/domain/produto.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
var ProdutosPage = (function () {
    function ProdutosPage(navCtrl, navParams, produtoService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoService = produtoService;
        this.loadingCtrl = loadingCtrl;
        this.items = [];
        this.page = 0;
    }
    ProdutosPage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    ProdutosPage.prototype.loadData = function () {
        var _this = this;
        var categoria_id = this.navParams.get('categoria_id');
        var loader = this.presentLoading();
        this.produtoService.findByCategoria(categoria_id, this.page, 10)
            .subscribe(function (response) {
            var start = _this.items.length;
            _this.items = _this.items.concat(response['content']);
            var end = _this.items.length - 1;
            loader.dismiss();
            console.log(_this.page);
            console.log(_this.items);
            _this.loadImageUrls(start, end);
        }, function (error) {
            loader.dismiss();
        });
    };
    ProdutosPage.prototype.loadImageUrls = function (start, end) {
        var _loop_1 = function () {
            var item = this_1.items[i];
            this_1.produtoService.getSmallImageFromBucket(item.id)
                .subscribe(function (response) {
                item.imageUrl = API_CONFIG.bucketBaseUrl + "/prod" + item.id + "-small.jpg";
            }, function (error) { });
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1();
        }
    };
    ProdutosPage.prototype.showDetail = function (produto_id) {
        this.navCtrl.push('ProdutoDetailPage', { produto_id: produto_id });
    };
    ProdutosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    ProdutosPage.prototype.doRefresh = function (refresher) {
        this.page = 0;
        this.items = [];
        this.loadData();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    ProdutosPage.prototype.doInfinite = function (infiniteScroll) {
        this.page++;
        this.loadData();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    ProdutosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-produtos',
            templateUrl: 'produtos.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProdutoService,
            LoadingController])
    ], ProdutosPage);
    return ProdutosPage;
}());
export { ProdutosPage };
//# sourceMappingURL=produtos.js.map