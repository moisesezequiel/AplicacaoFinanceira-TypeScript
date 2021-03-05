class NegociacaoController{
    private _inputData;
    private _inputQuantidade;
    private _inputValor;

    constructor(){
        //pega os campos declarados via Id no html (DOM)
        this._inputData =document.querySelector('#data');
        this._inputQuantidade =document.querySelector('#quantidade');
        this._inputValor =document.querySelector('#valor');
    }

    adiciona(event){
        //Executa as requisicoes e nao carrega a pagina 
        event.preventDefault();
        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao)
    }
}