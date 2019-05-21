class NegotiationController {

    constructor() {

        let $ =  document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
    }

    add(ev) {
        ev.preventDefault();

        let date = DateHelper.textToDate(this._inputDate);

        let negotiation =  new Negotiation(date, this._inputQuantity.value, this._inputValue.value);

        let dayMonthYear = DateHelper.dateToText(negotiation)

        console.log(negotiation);
        console.log(dayMonthYear);
        this._clearForm();
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}