import {Imprimivel} from './Imprimivel';
export class Negociacao implements Imprimivel {
  //colocando os atributos diretamente no construtor e definindo o tipo  
   
  constructor(readonly data: Date, readonly quantidade :number,readonly valor: number){//subistituindo private para readonly se for só pra usar o metodo get

  }

    get volume() {
        return this.quantidade* this.valor;
      }

      paraTexto():void{
        console.log(
          `Data: ${this.data}
          Quantidade: ${this.quantidade}, 
          Valor: ${this.valor}, 
          Volume: ${this.volume}`
      )
      }
    
}