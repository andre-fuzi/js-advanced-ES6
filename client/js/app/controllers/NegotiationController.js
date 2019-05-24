class NegotiationController {

    constructor() {

        let $ =  document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._listNegotiations = new ListNegotiations();
        this._negotiationViews = new NegotiationViews($('#negotiationsList'));
        this._message =  new Message();
        this._messageView = new MessageViews($('#messageNotification'));

        this._negotiationViews.update(this._listNegotiations);
        this._messageView.update(this._message);
    }

    add(ev) {
        ev.preventDefault();

        this._listNegotiations.add(this._createNegotiation());

        this._negotiationViews.update(this._listNegotiations);
        this._message.text = 'Negociação encaminhada com sucesso';
        this._messageView.update(this._message);

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