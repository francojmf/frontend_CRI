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
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { API_CONFIG } from '../../config/api.config';
import { DomSanitizer } from '@angular/platform-browser';
import { PedidoService } from '../../services/domain/pedido.service';
import { HttpClient } from '@angular/common/http';
var Profile2Page = (function () {
    function Profile2Page(navCtrl, navParams, http, storage, usuarioService, pedidoService, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.pedidoService = pedidoService;
        this.sanitizer = sanitizer;
        this.cameraOn = false;
        this.profileImage = 'assets/imgs/avatar-blank.png';
    }
    Profile2Page.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    Profile2Page.prototype.loadData = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(function (response) {
                _this.usuario = response;
                _this.getImageIfExists();
            }, function (error) {
                if (error.status == 403) {
                    _this.navCtrl.setRoot('MenuPage');
                }
            });
            this.usuarioService.findById(this.usuario.id)
                .subscribe(function (response) {
                _this.usuario = response;
                _this.endereco = _this.findEndereco(_this.pedido.enderecoDeEntrega.id, response['enderecos']);
            }, function (error) {
                _this.navCtrl.setRoot('MenuPage');
            });
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    Profile2Page.prototype.findEndereco = function (id, list) {
        var position = list.findIndex(function (x) { return x.id == id; });
        return list[position];
    };
    Profile2Page.prototype.getImageIfExists = function () {
        var _this = this;
        this.usuarioService.getImageFromBucket(this.usuario.id)
            .subscribe(function (response) {
            _this.usuario.imageUrl = API_CONFIG.bucketBaseUrl + "/cp" + _this.usuario.id + ".jpg";
            _this.blobToDataURL(response).then(function (dataUrl) {
                var str = dataUrl;
                _this.profileImage = _this.sanitizer.bypassSecurityTrustUrl(str);
            });
        }, function (error) {
            _this.profileImage = 'assets/imgs/avatar-blank.png';
        });
    };
    Profile2Page.prototype.blobToDataURL = function (blob) {
        return new Promise(function (fulfill, reject) {
            var reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function (e) { return fulfill(reader.result); };
            reader.readAsDataURL(blob);
        });
    };
    Profile2Page.prototype.back = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    Profile2Page.prototype.cancel = function () {
        this.picture = null;
    };
    Profile2Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile2',
            templateUrl: 'profile2.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            StorageService,
            UsuarioService,
            PedidoService,
            DomSanitizer])
    ], Profile2Page);
    return Profile2Page;
}());
export { Profile2Page };
//# sourceMappingURL=profile2.js.map