class NegotiationViews extends Views{

    constructor(el) {
        super(el); //It was not necessary, because the Super Classe has the same amount of  variables;
    }

    template(model) {

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
                        ${model.negotiations.map(el => `<tr>
                                <td>${DateHelper.dateToText(el.date)}</td>
                                <td>${el.quantity}</td>
                                <td>${el.value}</td>
                                <td>${el.volume}</td>
                            </tr>`
                        ).join('')}
                    </tbody>

                    <tfoot> 
                        <td colspan="3"></td>
                        <td>${model.negotiations.reduce((total, num) => total + num.volume, 0)}</td>
                    </tfoot>
                </table>`
    }
}