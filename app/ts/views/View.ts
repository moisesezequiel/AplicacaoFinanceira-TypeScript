declare var $:any;//declarando o $() do Jquery

abstract class View <T>{
    //definindo classe abstrata para definir que nao poderá ser criado uma instancia
    protected _elemento:any; //mudando de Element para Any para caber dentro do metodo update

    constructor(seletor:string){//selecionando o id que está la no html
        this._elemento = $(seletor);//seletor Jquery
    }

    update(model:T) {
        this._elemento.html(this.template(model));
    }

   abstract template(model:T) : string;//metodo abstrato para ser implementado nas classes filhas 
}