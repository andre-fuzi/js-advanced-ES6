class ListNegotiations {

    constructor(trap) {
        this._negotiations = [];
        this._trap = trap;
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
        this._trap(this);
    }

    get negotiations() {
        return [].concat(this._negotiations);
    }

    clean() {
        this._negotiations = [];
        this._trap(this);
    }
}