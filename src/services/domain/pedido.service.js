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
var PedidoService = (function () {
    function PedidoService(http) {
        this.http = http;
    }
    PedidoService.prototype.getPedidos = function () {
        return this.http.get(API_CONFIG.baseUrl + "/pedidos/" + this.id);
    };
    PedidoService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/pedidos");
    };
    PedidoService.prototype.findOrderById = function (id) {
        return this.http.get(API_CONFIG.baseUrl + "/pedidos/" + id);
    };
    PedidoService.prototype.insert = function (obj) {
        return this.http.post(API_CONFIG.baseUrl + "/pedidos", obj, {
            observe: "response",
            responseType: "text",
        });
    };
    PedidoService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PedidoService);
    return PedidoService;
}());
export { PedidoService };
//# sourceMappingURL=pedido.service.js.map