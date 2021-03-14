import {Imprimivel} from './Imprimivel'
import {Negociacao} from './Negociacao'
export class Negociacoes extends Imprimivel{
    private _negociacoes:Negociacao[] =[]; //usando uma classes para gerenciar o array usando na nossa app

    adiciona(negociacao : Negociacao){
        this._negociacoes.push(negociacao);
    }
    paraArray() :Negociacao[]{
        //define o tipo do array e apresenta a lista de negociacoes

       return ([] as Negociacao[]).concat(this._negociacoes);
    }
    paraTexto(): void {

        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }
}