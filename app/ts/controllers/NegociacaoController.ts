class NegociacaoController{
   //Tipando as variaveis que manipulam o DOM com o tipo //HTMLInputElement
    private _inputData :JQuery;
    private _inputQuantidade : JQuery;
    private _inputValor :JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#tableNeg');
    private _mensagemView = new MensagemView('#mensagemView')

    constructor(){
     //pega os campos declarados via Id no html (DOM)
    //<HTMLInputElement> Faz um casting de um elemento mais generico para um  elemento mais especifico  
        this._inputData =$('#data');
        this._inputQuantidade =$('#quantidade');
        this._inputValor =$('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
   //Tipando os eventos que manipulam o DOM com o tipo Event 
    adiciona(event : Event){
        //Executa as requisicoes e nao carrega a pagina 
        event.preventDefault();

        const negociacao = new Negociacao(
           new Date(this._inputData.val().replace(/-/g,',')), //retira o ifem e subistitui por virgula
            parseInt(this._inputQuantidade.val()), //parse de HTMLInputElement para int
            parseFloat(this._inputValor.val()), //parse de HTMLInputElement para float
        );
        this._negociacoes.adiciona(negociacao)
        this._negociacoesView.update(this._negociacoes); //ebviando as negociacoes para o view e montar na tabela 
        // console.log(negociacao)
        this._mensagemView.update('negociacao adicionada com sucesso')
    }
}