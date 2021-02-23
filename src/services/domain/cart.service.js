var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
var CartService = (function () {
    function CartService(storage) {
        this.storage = storage;
    }
    CartService.prototype.createOrClearCart = function () {
        var cart = { items: [] };
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.getCart = function () {
        var cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    };
    CartService.prototype.addProduto = function (produto) {
        var cart = this.getCart();
        var position = cart.items.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position == -1) {
            cart.items.push({ quantidade: 1, produto: produto });
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.removeProduto = function (produto) {
        var cart = this.getCart();
        var position = cart.items.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position != -1) {
            cart.items.splice(position, 1);
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.increaseQuantity = function (produto) {
        var cart = this.getCart();
        var position = cart.items.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position != -1) {
            cart.items[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.decreaseQuantity = function (produto) {
        var cart = this.getCart();
        var position = cart.items.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position != -1) {
            cart.items[position].quantidade--;
            if (cart.items[position].quantidade < 1) {
                cart = this.removeProduto(produto);
            }
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.total = function () {
        var cart = this.getCart();
        var sum = 0;
        for (var i = 0; i < cart.items.length; i++) {
            sum += cart.items[i].quantidade;
        }
        return sum;
    };
    CartService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [StorageService])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map