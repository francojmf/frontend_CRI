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
import { OrderService } from '../../services/domain/order.service';
import { StorageService } from '../../services/storage.service';
var UserListCopyPage = (function () {
    function UserListCopyPage(navCtrl, navParams, storage, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.pedidoService = pedidoService;
        this.cameraOn = false;
        this.profileImage = 'assets/imgs/avatar-blank.png';
    }
    UserListCopyPage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    UserListCopyPage.prototype.loadData = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.id) {
            this.pedidoService.findById(localUser.id)
                .subscribe(function (response) {
                _this.pedidos = response;
            }, function (error) {
                if (error.status == 403) {
                    _this.navCtrl.setRoot('MenuPage');
                }
            });
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    UserListCopyPage.prototype.backMenu = function () {
        this.navCtrl.push('MenuPage');
    };
    UserListCopyPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-list-copy',
            templateUrl: 'user-list-copy.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            StorageService,
            OrderService])
    ], UserListCopyPage);
    return UserListCopyPage;
}());
export { UserListCopyPage };
//# sourceMappingURL=user-list-copy.js.map