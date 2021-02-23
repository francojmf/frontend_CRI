var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
var ProdutoService = (function () {
    function ProdutoService(http) {
        this.http = http;
    }
    ProdutoService.prototype.findById = function (produto_id) {
        return this.http.get(API_CONFIG.baseUrl + "/produtos/" + produto_id);
    };
    ProdutoService.prototype.findByCategoria = function (categoria_id, page, linesPerPage) {
        if (page === void 0) { page = 0; }
        if (linesPerPage === void 0) { linesPerPage = 24; }
        return this.http.get(API_CONFIG.baseUrl + "/produtos/?categorias=" + categoria_id + "&page=" + page + "&linesPerPage=" + linesPerPage);
    };
    ProdutoService.prototype.getSmallImageFromBucket = function (id) {
        var url = API_CONFIG.bucketBaseUrl + "/prod" + id + "-small.jpg";
        return this.http.get(url, { responseType: 'blob' });
    };
    ProdutoService.prototype.getImageFromBucket = function (id) {
        var url = API_CONFIG.bucketBaseUrl + "/prod" + id + ".jpg";
        return this.http.get(url, { responseType: 'blob' });
    };
    ProdutoService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProdutoService);
    return ProdutoService;
}());
export { ProdutoService };
//# sourceMappingURL=produto.service.js.map