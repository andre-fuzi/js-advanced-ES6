class NegotiationController {

    constructor() {

        let $ =  document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
    }

    add(ev) {
        ev.preventDefault();

        let date = new Date(...this._inputDate.value.split('-').map((el, index) => parseInt(el) - index%2));

        let negotiation =  new Negotiation(date, this._inputQuantity.value, this._inputValue.value);

        console.log(negotiation);

        this._clearForm();
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}