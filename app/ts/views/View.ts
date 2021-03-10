class View{
    protected _elemento:Element;

    constructor(seletor:string){//selecionando o id que está la no html
        this._elemento = document.querySelector(seletor)
    }
}