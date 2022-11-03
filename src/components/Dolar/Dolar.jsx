import {useState, useEffect} from 'react';

const Dolar = () => {

    const [dolar, setDolar] = useState([]);
    useEffect(() => {
        setInterval(() => {
            fetch('https://criptoya.com/api/argenbtc/btc/ars/0.5')
         .then(response => response.json())
         .then(({ask, totalAsk, bid}) => {
            console.log(ask, totalAsk, bid)
            const dolarDom = 
            <div>
                <h2>Cotizaciones del dolar</h2>
                <p>Dolar solidario: ${ask} </p>
                <p>Dolar totalAsk: ${totalAsk} </p>
                <p>Dolar bid: ${bid}</p>
            </div>
            setDolar(dolarDom)
            console.log(dolarDom)

        })

        }, 60000)
        
     
    }, []);



    return (
        <div>
            {dolar}
            
        </div>
    );
}

export default Dolar;
