class NegociacoesView extends View {

   

    update(model : Negociacoes):void{ //metodo para adicionar o table visualmente
        this._elemento.innerHTML = this.template(model);
    }
    // app/ts/views/NegociacoesView.ts

    template(model : Negociacoes): string { // parametro esperando as negociacoes sendo enviadas 

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(negociacao=>//montando negoiacoes na tabela com seus campos
                `
            <tr>
                <td>${negociacao.data.getDate()} /${ negociacao.data.getMonth() }/${ negociacao.data.getFullYear()}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
             <tr>
             `

            ).join('')}   
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    } //join vazio para concatenar todas strings e sumir uma virgula 
}