class NegotiationService {
    
    getNegotiations(callback) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    callback(null,JSON.parse(xhr.responseText).map(el => new Negotiation(new Date(el.data), el.quantidade, el.valor)));                      
                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível importar as negociações!');
                }
            }
        }
        xhr.send();
    }
}