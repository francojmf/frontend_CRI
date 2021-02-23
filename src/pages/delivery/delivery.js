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
import { FormBuilder } from '@angular/forms';
var DeliveryPage = (function () {
    function DeliveryPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.pedido = this.navParams.get('pedido');
        this.formGroup = this.formBuilder.group({
            numeroDeDias: [1],
            "@type": ["correios"]
        });
        //  data_entrega: ["previsto"],
        //  data_envio: ["enviado"],
    }
    DeliveryPage.prototype.nextPage = function () {
        this.pedido.entrega = this.formGroup.value;
        this.navCtrl.setRoot('OrderConfirmation', { pedido: this.pedido });
    };
    DeliveryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-delivery',
            templateUrl: 'delivery.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder])
    ], DeliveryPage);
    return DeliveryPage;
}());
export { DeliveryPage };
//# sourceMappingURL=delivery.js.map