System.register(["../helpers/decorators/Index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var Index_1, View;
    return {
        setters: [
            function (Index_1_1) {
                Index_1 = Index_1_1;
            }
        ],
        execute: function () {
            View = class View {
                constructor(seletor, escape = false) {
                    this._elemento = $(seletor);
                    this._escape = escape;
                }
                update(model) {
                    this._elemento.html(this.template(model));
                    let template = this.template(model);
                    if (this._escape) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                        this._elemento.html(template);
                    }
                }
            };
            __decorate([
                Index_1.tempoDeExecucao()
            ], View.prototype, "update", null);
            exports_1("View", View);
        }
    };
});
