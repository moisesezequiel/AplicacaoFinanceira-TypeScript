class View <T>{
    protected _elemento:Element;

    constructor(seletor:string){//selecionando o id que está la no html
        this._elemento = document.querySelector(seletor)
    }

    update(model:T) :void{
        this._elemento.innerHTML = this.template(model);
    }

    template(model:T) : string {
    throw new Error("Voce deve implementar o metodo Template")
    }
}