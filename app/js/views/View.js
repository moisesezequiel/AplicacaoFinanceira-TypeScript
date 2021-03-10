class View {
    constructor(seletor) {
        this._elemento = $(seletor); //seletor Jquery
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
