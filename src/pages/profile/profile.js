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
import { Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { PedidoService } from '../../services/domain/pedido.service';
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, storage, usuarioService, pedidoService, camera, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.pedidoService = pedidoService;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.cameraOn = false;
        this.profileImage = 'assets/imgs/avatar-blank.png';
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    ProfilePage.prototype.loadData = function () {
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
        }
        else {
            this.navCtrl.setRoot('MenuPage');
        }
    };
    ProfilePage.prototype.findEndereco = function (id, list) {
        var position = list.findIndex(function (x) { return x.id == id; });
        return list[position];
    };
    ProfilePage.prototype.getImageIfExists = function () {
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
    // https://gist.github.com/frumbert/3bf7a68ffa2ba59061bdcfc016add9ee
    ProfilePage.prototype.blobToDataURL = function (blob) {
        return new Promise(function (fulfill, reject) {
            var reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function (e) { return fulfill(reader.result); };
            reader.readAsDataURL(blob);
        });
    };
    ProfilePage.prototype.getCameraPicture = function () {
        var _this = this;
        this.cameraOn = true;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.picture = 'data:image/png;base64,' + imageData;
            _this.cameraOn = false;
        }, function (err) {
            _this.cameraOn = false;
        });
    };
    ProfilePage.prototype.getGalleryPicture = function () {
        var _this = this;
        this.cameraOn = true;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.picture = 'data:image/png;base64,' + imageData;
            _this.cameraOn = false;
        }, function (err) {
            _this.cameraOn = false;
        });
    };
    ProfilePage.prototype.sendPicture = function () {
        var _this = this;
        this.usuarioService.uploadPicture(this.picture)
            .subscribe(function (response) {
            _this.picture = null;
            _this.getImageIfExists();
        }, function (error) {
        });
    };
    ProfilePage.prototype.back = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ProfilePage.prototype.cancel = function () {
        this.picture = null;
    };
    ProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            StorageService,
            UsuarioService,
            PedidoService,
            Camera,
            DomSanitizer])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map