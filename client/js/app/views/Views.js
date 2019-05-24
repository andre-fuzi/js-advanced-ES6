class Views {
    constructor(el) {
        this._element = el;
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template(model) {
        throw new Error("You must overwrite this method in your subclass");
    }
}