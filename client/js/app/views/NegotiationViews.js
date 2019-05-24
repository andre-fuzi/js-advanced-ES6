class NegotiationViews {

    constructor(el) {
        this._element = el;
    }

    update(model) {
        this._element.innerHTML = this._template(model);
    }

    _template(list) {

        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${list.negotiations.map(el => `<tr>
                                <td>${DateHelper.dateToText(el.date)}</td>
                                <td>${el.quantity}</td>
                                <td>${el.value}</td>
                                <td>${el.volume}</td>
                            </tr>`
                        ).join('')}
                    </tbody>

                    <tfoot> 
                        <td colspan="3"></td>
                        <td>${list.negotiations.reduce((total, num) => total + num.volume, 0)}</td>
                    </tfoot>
                </table>`
    }
}