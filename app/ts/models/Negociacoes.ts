class Negociacoes{
    private _negociacoes:Negociacao[] =[]; //usando uma classes para gerenciar o array usando na nossa app

    adiciona(negociacao : Negociacao){
        this._negociacoes.push(negociacao);
    }
    paraArray() :Negociacao[]{
        //define o tipo do array e apresenta a lista de negociacoes

       return [].concat(this._negociacoes);
    }
}