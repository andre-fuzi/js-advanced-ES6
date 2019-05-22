class ListNegotiations {

    constructor() {
        this._listNegotiations = [];
    }

    add(negotiation) {
        this._listNegotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._listNegotiations);
    }
}