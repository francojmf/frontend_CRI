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
import { FormBuilder, Validators } from '@angular/forms';
var OrderPayPage = (function () {
    function OrderPayPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.parcelas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.pedido = this.navParams.get('pedido');
        this.formGroup = this.formBuilder.group({
            numeroDeParcelas: [1, Validators.required],
            "@type": ["pagamentoComCartao", Validators.required]
        });
    }
    OrderPayPage.prototype.nextPage = function () {
        this.pedido.pagamento = this.formGroup.value;
        this.navCtrl.setRoot('OrderConfirmationPage', { pedido: this.pedido });
    };
    OrderPayPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-order-pay',
            templateUrl: 'order-pay.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder])
    ], OrderPayPage);
    return OrderPayPage;
}());
export { OrderPayPage };
//# sourceMappingURL=order-pay.js.map