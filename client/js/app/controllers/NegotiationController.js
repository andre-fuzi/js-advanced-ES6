class NegotiationController {

    constructor() {

        let $ =  document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._listNegotiations = new ListNegotiations();
    }

    add(ev) {
        ev.preventDefault();

        this._listNegotiations.add(this._createNegotiation());

        // let dayMonthYear = DateHelper.dateToText(negotiation)

        console.log(this._listNegotiations.negotiations);
        this._clearForm();
    }

    _createNegotiation() {
        return new Negotiation(DateHelper.textToDate(this._inputDate), this._inputQuantity.value, this._inputValue.value);
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}