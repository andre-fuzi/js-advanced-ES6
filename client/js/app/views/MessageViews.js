class MessageViews extends Views {
    constructor(el) {
        super(el) //It was not necessary, because the Super Classe has the same amount of  variables;
    }

    template(model) {
        return (model.text) ? `<p class='alert alert-info'>${model.text}</p>` : `<p></p>`;
    }
}