class Negociacoes {
    constructor() {
        this._negociacoes = []; //usando uma classes para gerenciar o array usando na nossa app
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //define o tipo do array e apresenta a lista de negociacoes
        return [].concat(this._negociacoes);
    }
}
