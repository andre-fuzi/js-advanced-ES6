class DateHelper {

    constructor() {

        throw new Error("DateHelper can not be instatiated...")
    }

    static textToDate(text) {
        return new Date(...text.value.split('-').map((el, index) => parseInt(el) - index%2));
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
}