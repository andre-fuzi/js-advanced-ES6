class NegotiationController {

    constructor() {

        let $ =  document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');

        var self = this;
        this._listNegotiations = new Proxy(new ListNegotiations(), {
            get(target, prop, receiver) {

                if(['add', 'clean'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    return function() {
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        self._negotiationViews.update(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });

        this._negotiationViews = new NegotiationViews($('#negotiationsList'));
        this._message =  new Message();
        this._messageView = new MessageViews($('#messageNotification'));

        this._negotiationViews.update(this._listNegotiations);
        this._messageView.update(this._message);
    }

    add(ev) {
        ev.preventDefault();

        this._listNegotiations.add(this._createNegotiation());

        this._message.text = 'Negociação encaminhada com sucesso';
        this._messageView.update(this._message);

        this._clearForm();
    }

    delete() {
        this._listNegotiations.clean();

        this._message.text = 'Lista de Negociações apagadas com sucesso';
        this._messageView.update(this._message);
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