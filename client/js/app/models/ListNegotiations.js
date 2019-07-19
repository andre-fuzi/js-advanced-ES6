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

    get totalValue() {
        return this._negotiations.reduce( (total, n) => total + n.volume, 0.0);
    }
}