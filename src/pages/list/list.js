var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
var ListPage = (function () {
    function ListPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pedidos = [
            {
                id: 1,
                ped: 1,
                produto: 2,
                nome: "Andre",
                med_a: 36,
                med_b: 27,
                med_c: 33,
                med_d: 30,
                med_e: 14,
                med_f: 25,
                descricao: "Emiplegia",
            },
            {
                id: 1,
                ped: 1,
                produto: 1,
                nome: "Gustavo",
                med_a: 38,
                med_b: 27,
                med_c: 33,
                med_d: 30,
                med_e: 16,
                med_f: 27,
                descricao: "Emiplegia",
            },
            {
                id: 1,
                ped: 2,
                produto: 1,
                nome: "Andriana",
                med_a: 36,
                med_b: 25,
                med_c: 30,
                med_d: 28,
                med_e: 14,
                med_f: 25,
                descricao: "Paralisia da cintura para baixo",
            },
            {
                id: 1,
                ped: 2,
                produto: 2,
                nome: "Matheus",
                med_a: 37,
                med_b: 26,
                med_c: 31,
                med_d: 29,
                med_e: 15,
                med_f: 26,
                descricao: "Paralisia cerebral",
            },
            {
                id: 2,
                ped: 3,
                produto: 1,
                nome: "Vinicius",
                med_a: 35,
                med_b: 24,
                med_c: 30,
                med_d: 27,
                med_e: 15,
                med_f: 26,
                descricao: "Paralisia cerebral",
            },
            {
                id: 2,
                ped: 3,
                produto: 2,
                nome: "Vanessa",
                med_a: 35,
                med_b: 24,
                med_c: 30,
                med_d: 28,
                med_e: 15,
                med_f: 26,
                descricao: "Amputação de pernas",
            },
            {
                id: 2,
                ped: 4,
                produto: 2,
                nome: "Maria",
                med_a: 35,
                med_b: 24,
                med_c: 30,
                med_d: 27,
                med_e: 13,
                med_f: 24,
                descricao: "Emiplegia",
            },
            {
                id: 2,
                ped: 4,
                produto: 1,
                nome: "Ricardo",
                med_a: 38,
                med_b: 27,
                med_c: 33,
                med_d: 29,
                med_e: 15,
                med_f: 26,
                descricao: "Paralisia",
            },
        ];
    }
    ListPage.prototype.backMenu = function () {
        this.navCtrl.push("MenuPage");
    };
    ListPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-list",
            templateUrl: "list.html",
        }),
        __metadata("design:paramtypes", [NavController])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.js.map