export class Negociacao{
  //colocando os atributos diretamente no construtor e definindo o tipo  
    constructor(readonly data: Date, readonly quantidade :number,readonly valor: number){//subistituindo private para readonly se for só pra usar o metodo get
    }

    get volume() {
        return this.quantidade* this.valor;
    }
    
}