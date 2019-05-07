class Negotiation {

    constructor(date, quantity, value) {

        this._date = new Date(date.getTime());
        this._quantity = quantity;
        this._value = value;

        // Returns de object in a frozen state - Shallow immutability
        Object.freeze(this);
        
    }

    get data() {
        return new Date(this._date.getTime());
    }

    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._value * this._quantity;
    }
}