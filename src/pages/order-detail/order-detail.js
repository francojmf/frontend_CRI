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
import { OrderService } from '../../services/domain/order.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams, formBuilder, orderService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.alertCtrl = alertCtrl;
        this.formGroup = this.formBuilder.group({
            nome: ['Nome da criança', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
            med_a: ['36', [Validators.maxLength(3)]],
            med_b: ['25', []],
            med_c: ['30', []],
            med_d: ['28', []],
            med_e: ['14', []],
            med_f: ['25', []],
            descricao: ['Descreva resumidamente a limitação da criança.', []]
        });
    }
    OrderDetailPage.prototype.nextPage = function (item) {
        var _this = this;
        this.orderService.insert(this.formGroup.value)
            .subscribe(function (response) {
            _this.showInsertOk();
        }, function (error) { });
        this.navCtrl.setRoot('PickAddressPage');
    };
    OrderDetailPage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            message: 'Pedido efetuado com sucesso',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    OrderDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-order-detail',
            templateUrl: 'order-detail.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder,
            OrderService,
            AlertController])
    ], OrderDetailPage);
    return OrderDetailPage;
}());
export { OrderDetailPage };
//# sourceMappingURL=order-detail.js.map