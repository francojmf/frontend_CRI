var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";
import { ImageUtilService } from "../image-util.service";
var UsuarioService = (function () {
    function UsuarioService(http, storage, imageUtilService) {
        this.http = http;
        this.storage = storage;
        this.imageUtilService = imageUtilService;
    }
    UsuarioService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/usuarios");
    };
    UsuarioService.prototype.findById = function (id) {
        return this.http.get(API_CONFIG.baseUrl + "/usuarios/" + id);
    };
    UsuarioService.prototype.findByEmail = function (email) {
        return this.http.get(API_CONFIG.baseUrl + "/usuarios/email?value=" + email);
    };
    UsuarioService.prototype.findAddressById = function (id) {
        return this.http.get(API_CONFIG.baseUrl + "/enderecos/" + id);
    };
    UsuarioService.prototype.getImageFromBucket = function (id) {
        var url = API_CONFIG.bucketBaseUrl + "/cp" + id + ".jpg";
        return this.http.get(url, { responseType: "blob" });
    };
    UsuarioService.prototype.insert = function (obj) {
        return this.http.post(API_CONFIG.baseUrl + "/usuarios", obj, {
            observe: "response",
            responseType: "text",
        });
    };
    UsuarioService.prototype.uploadPicture = function (picture) {
        var pictureBlob = this.imageUtilService.dataUriToBlob(picture);
        var formData = new FormData();
        formData.set("file", pictureBlob, "file.png");
        return this.http.post(API_CONFIG.baseUrl + "/usuarios/picture", formData, {
            observe: "response",
            responseType: "text",
        });
    };
    UsuarioService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            StorageService,
            ImageUtilService])
    ], UsuarioService);
    return UsuarioService;
}());
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map