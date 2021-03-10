class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#tableNeg');
        this._mensagemView = new MensagemView('#mensagemView');
        //pega os campos declarados via Id no html (DOM)
        //<HTMLInputElement> Faz um casting de um elemento mais generico para um  elemento mais especifico  
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    //Tipando os eventos que manipulam o DOM com o tipo Event 
    adiciona(event) {
        //Executa as requisicoes e nao carrega a pagina 
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), //retira o ifem e subistitui por virgula
        parseInt(this._inputQuantidade.value), //parse de HTMLInputElement para int
        parseFloat(this._inputValor.value) //parse de HTMLInputElement para float
        );
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes); //ebviando as negociacoes para o view e montar na tabela 
        // console.log(negociacao)
        this._mensagemView.update('negociacao adicionada com sucesso');
    }
}
