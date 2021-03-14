System.register(["../views/index", "../models/index", "../helpers/decorators/Index", "../services/\u00EEndex", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, Index_1, Index_2, _ndex_1, index_3, NegociacaoController, Dias;
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
                Index_2 = Index_1_1;
            },
            function (_ndex_1_1) {
                _ndex_1 = _ndex_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#tabela', false);
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._service = new _ndex_1.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    debugger;
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Somente Possivel fazer negociacoes em dias da semana ');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    index_3.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('negociacao adicionada com sucesso');
                }
                _ehDiaUtil(data) {
                    return data.getDay() != Dias.sabado && data.getDay() != Dias.domingo;
                }
                importarDados() {
                    this._service
                        .obterNegociacoes(res => {
                        if (res.ok)
                            return res;
                        throw new Error(res.statusText);
                    })
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
            };
            __decorate([
                Index_2.donInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                Index_2.donInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                Index_2.donInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                Index_1.throttle()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                Index_1.throttle()
            ], NegociacaoController.prototype, "importarDados", null);
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
