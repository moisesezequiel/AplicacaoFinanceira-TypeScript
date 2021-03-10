abstract class View <T>{
    //definindo classe abstrata para definir que nao poderá ser criado uma instancia
    protected _elemento:Element;

    constructor(seletor:string){//selecionando o id que está la no html
        this._elemento = document.querySelector(seletor)
    }

    update(model:T) :void{
        this._elemento.innerHTML = this.template(model);
    }

   abstract template(model:T) : string;//metodo abstrato para ser implementado nas classes filhas 
}