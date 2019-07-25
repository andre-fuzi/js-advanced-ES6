class NegotiationService {

    constructor() {

        this._http = new HttpService();
    }

    getAllNegotiations() {
        return Promise.all([this.getNegotiationsWeek(), this.getNegotiationsLastWeek(), this.getNegotiationsTwoWeeksAgo()])
            .then(res => {
                let negotiations = res
                    .reduce((list, current) => list.concat(current), []);
                
                    return negotiations;
            })
            .catch(err => {
                throw new Error(err);
            })
    }
    
    getNegotiationsWeek() {

        return this._http.get('negociacoes/semana')
            .then(res => {
                return res.map(el => new Negotiation(new Date(el.data), el.quantidade, el.valor))
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da semana!')
            })
    }

    getNegotiationsLastWeek() {

        return this._http.get('negociacoes/anterior')
            .then(res => {
                return res.map(el => new Negotiation(new Date(el.data), el.quantidade, el.valor))
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da semana passada!')
            })
    }

    getNegotiationsTwoWeeksAgo() {

        return this._http.get('negociacoes/retrasada')
            .then(res => {
                return res.map(el => new Negotiation(new Date(el.data), el.quantidade, el.valor))
            })
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações da semana retrasada!')
            })
    }
}