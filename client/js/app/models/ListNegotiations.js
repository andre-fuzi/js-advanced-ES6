class ListNegotiations {

    constructor() {
        this._negotiations = [];
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._negotiations);
    }

    clean() {
        this._negotiations = [];
    }
}