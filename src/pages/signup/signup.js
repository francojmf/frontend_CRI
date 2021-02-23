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
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { UsuarioService } from '../../services/domain/usuario.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder, cidadeService, estadoService, usuarioService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.cidadeService = cidadeService;
        this.estadoService = estadoService;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.formGroup = this.formBuilder.group({
            nome: ['Joaquim Exemplo', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
            email: ['joaquim-exemplo@gmail.com', [Validators.required, Validators.email]],
            tipo: ['1', [Validators.required]],
            cpfOuCnpj: ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
            senha: ['123', [Validators.required]],
            entidade: ['Nome da Entidade', []],
            atividade: ['Atividade que realiza', []],
            logradouro: ['Rua Nome da Via', [Validators.required]],
            numero: ['25', [Validators.required]],
            complemento: ['Apto 3', []],
            bairro: ['Nome do Bairro', []],
            cep: ['12828384', [Validators.required]],
            telefone1: ['12978707060', [Validators.required]],
            telefone2: ['', []],
            telefone3: ['', []],
            estadoId: [null, [Validators.required]],
            cidadeId: [null, [Validators.required]]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.estadoService.findAll()
            .subscribe(function (response) {
            _this.estados = response;
            _this.formGroup.controls.estadoId.setValue(_this.estados[0].id);
            _this.updateCidades();
        }, function (error) { });
    };
    SignupPage.prototype.updateCidades = function () {
        var _this = this;
        var estado_id = this.formGroup.value.estadoId;
        this.cidadeService.findAll(estado_id)
            .subscribe(function (response) {
            _this.cidades = response;
            _this.formGroup.controls.cidadeId.setValue(null);
        }, function (error) { });
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.usuarioService.insert(this.formGroup.value)
            .subscribe(function (response) {
            _this.showInsertOk();
        }, function (error) { });
    };
    SignupPage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            message: 'Cadastro efetuado com sucesso',
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
    SignupPage.prototype.back = function () {
        this.navCtrl.setRoot('IndexPage');
    };
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            FormBuilder,
            CidadeService,
            EstadoService,
            UsuarioService,
            AlertController])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map