import {tempoDeExecucao} from "../helpers/decorators/Index"
  export abstract class View<T>{
        
        protected _elemento: JQuery; 
        private _escape : boolean ;     
                                //? paramertro opocional 
        constructor(seletor: string, escape:boolean= false) {
            this._elemento = $(seletor);//seletor Jquery
            this._escape = escape;
        }


        @tempoDeExecucao()
        update(model: T) {
            this._elemento.html(this.template(model));
            let template = this.template(model);
            if(this._escape){
                template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                this._elemento.html(template);
            }
        }

        abstract template(model: T): string;//metodo abstrato para ser implementado nas classes filhas 
    }

          
    //1necessario exportar para aparecer nas outras classes
    //3definindo classe abstrata para definir que nao poderá ser criado uma instancia
    //4mudando de Element para Any para caber dentro do metodo update
    //7selecionando o id que está la no html
