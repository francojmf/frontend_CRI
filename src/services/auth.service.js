import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";
import { JwtHelper } from "angular2-jwt";
import { CartService } from "./domain/cart.service";
var AuthService = (function () {
  function AuthService(http, storage, cartService) {
    this.http = http;
    this.storage = storage;
    this.cartService = cartService;
    this.jwtHelper = new JwtHelper();
  }
  AuthService.prototype.authenticate = function (creds) {
    return this.http.post(API_CONFIG.baseUrl + "/login", creds, {
      observe: "response",
      responseType: "text",
    });
  };
  AuthService.prototype.refreshToken = function () {
    return this.http.post(
      API_CONFIG.baseUrl + "/auth/refresh_token",
      {},
      {
        observe: "response",
        responseType: "text",
      }
    );
  };
  AuthService.prototype.successfulLogin = function (authorizationValue) {
    var tok = authorizationValue.substring(7);
    var user = {
      token: tok,
      email: this.jwtHelper.decodeToken(tok).sub,
      id: this.userId,
      nome: name,
    };
    this.storage.setLocalUser(user);
    this.cartService.createOrClearCart();
  };
  AuthService.prototype.logout = function () {
    this.storage.setLocalUser(user);
  };
  AuthService = __decorate(
    [
      Injectable(),
      __metadata("design:paramtypes", [
        HttpClient,
        StorageService,
        CartService,
      ]),
    ],
    AuthService
  );
  return AuthService;
})();

export { AuthService };
//# sourceMappingURL=auth.service.js.map
/*
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

forgot(email: EmailDTO) {
  return this.http.post(
      `${API_CONFIG.baseUrl}/auth/forgot`,
      email,
      { observe: 'response', responseType: 'text' }
  );
}

logout() {
  this.storage.setLocalUser(null);
}
*/
