import {Imprimivel} from './Imprimivel';
import {Igualavel} from './Igualavel';
export class Negociacao implements Imprimivel , Igualavel<Negociacao> {
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
      ehIgual(negociacao: Negociacao): boolean {

        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
    
}