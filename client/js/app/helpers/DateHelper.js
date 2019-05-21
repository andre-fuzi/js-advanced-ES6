class DateHelper {

    constructor() {

        throw new Error("DateHelper não pode ser instanciada...")
    }

    static textToDate(text) {
        return new Date(...text.value.split('-').map((el, index) => parseInt(el) - index%2));
    }

    static dateToText(negotiation) {
        return `${negotiation.date.getDate()}/${negotiation.date.getMonth()+1}/${negotiation.date.getFullYear()}`
    }
}