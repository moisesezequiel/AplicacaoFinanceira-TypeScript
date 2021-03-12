System.register(["../views/index", "../models/index", "../helpers/decorators/Index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, Index_1, NegociacaoController, Dias;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (Index_1_1) {
                Index_1 = Index_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#tabela', false);
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    debugger;
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Somente Possivel fazer negociacoes em dias da semana ');
                        return;
                    }
                    console.log(data.getDay());
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('negociacao adicionada com sucesso');
                }
                _ehDiaUtil(data) {
                    return data.getDay() != Dias.sabado && data.getDay() != Dias.domingo;
                }
            };
            __decorate([
                Index_1.tempoDeExecucao(false)
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (Dias) {
                Dias[Dias["domingo"] = 0] = "domingo";
                Dias[Dias["segunda"] = 1] = "segunda";
                Dias[Dias["terca"] = 2] = "terca";
                Dias[Dias["quarta"] = 3] = "quarta";
                Dias[Dias["quinta"] = 4] = "quinta";
                Dias[Dias["sexta"] = 5] = "sexta";
                Dias[Dias["sabado"] = 6] = "sabado";
            })(Dias || (Dias = {}));
        }
    };
});
