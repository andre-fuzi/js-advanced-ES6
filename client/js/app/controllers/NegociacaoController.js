class NegociacaoController {

    constructor() {

        let $ =  document.querySelector.bind(document);
        let _inputDate = $('#data');
        let _inputQuantity = $('#quantidade');
        let _inputValue = $('#valor');
    }

    adiciona(ev) {
        ev.preventDefault();

        console.log(this._inputDate.value)
        console.log(this._inputQuantity.value)
        console.log(this._inputValue.value)
    }
}