
/*


// ░█████╗░██╗░░░░░██████╗░██╗░░██╗░█████╗░██╗░░░██╗░█████╗░███╗░░██╗████████╗░█████╗░░██████╗░███████╗
// ██╔══██╗██║░░░░░██╔══██╗██║░░██║██╔══██╗██║░░░██║██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔════╝░██╔════╝
// ███████║██║░░░░░██████╔╝███████║███████║╚██╗░██╔╝███████║██╔██╗██║░░░██║░░░███████║██║░░██╗░█████╗░░
// ██╔══██║██║░░░░░██╔═══╝░██╔══██║██╔══██║░╚████╔╝░██╔══██║██║╚████║░░░██║░░░██╔══██║██║░░╚██╗██╔══╝░░
// ██║░░██║███████╗██║░░░░░██║░░██║██║░░██║░░╚██╔╝░░██║░░██║██║░╚███║░░░██║░░░██║░░██║╚██████╔╝███████╗
// ╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚═════╝░╚══════╝


// Valori costanti per la generazione dell'URL
const key = 'VEG0IE2LAH6K1TO4';
const base = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=';

// Genera l'url collegato all'API utilizzando i parametri
function generateURL(ticker, multipler, timespan, from, to){
    const generated = '' + base + ticker + '/range/' + multipler + '/' + timespan + '/' + from + '/' + to + '?adjusted=true&sort=asc&limit=800&apiKey=' + key;
    alert(generated);
    return generated;
}

─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────*/


// ██████╗░░█████╗░██╗░░░░░██╗░░░██╗░██████╗░░█████╗░███╗░░██╗
// ██╔══██╗██╔══██╗██║░░░░░╚██╗░██╔╝██╔════╝░██╔══██╗████╗░██║
// ██████╔╝██║░░██║██║░░░░░░╚████╔╝░██║░░██╗░██║░░██║██╔██╗██║
// ██╔═══╝░██║░░██║██║░░░░░░░╚██╔╝░░██║░░╚██╗██║░░██║██║╚████║
// ██║░░░░░╚█████╔╝███████╗░░░██║░░░╚██████╔╝╚█████╔╝██║░╚███║
// ╚═╝░░░░░░╚════╝░╚══════╝░░░╚═╝░░░░╚═════╝░░╚════╝░╚═╝░░╚══╝

// Results:

// c
// The close price for the symbol in the given time period.

// h
// The highest price for the symbol in the given time period.

// l
// The lowest price for the symbol in the given time period.

// n
// The number of transactions in the aggregate window.

// o
// The open price for the symbol in the given time period.

// t
// The Unix Msec timestamp for the start of the aggregate window.

// v
// The trading volume of the symbol in the given time period.

// vw
// The volume weighted average price.


/*
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────*/

// Valori immutabili
const key = '3EeuHppKTp5zgsIDr1KI2BtsfdveDj7G';
const base = 'https://api.polygon.io/v2/aggs/ticker/';

var a = 0;
var c;
var DateTime = luxon.DateTime;

var date = [];
var price = [];

// Genera l'url collegato all'API di Polygon.io utilizzando i parametri
function generateURL(ticker, multipler, timespan, from, to){
    const generated = '' + base + ticker + '/range/' + multipler + '/' + timespan + '/' + from + '/' + to + '?adjusted=true&sort=desc&limit=800&apiKey=' + key;
    return generated;
}

// Duplica i prezzi presenti nell'array di oggetti data[]
// in un nuovo array price[]
function prices(results){
    results.forEach(element => price.push(element.c));
}

// Partendo dalla prima data, per ogni elemento nell'array aumenta di un giorno
// e salva tutte le date in nuovo array (date[])
function dates(from, results){
    var dt = DateTime.fromISO(from);
    for(var i = 0; i < results.length; i++){
        date[i] = dt;
        dt = dt.plus({ hours: 24 });
    }
}

// Tramite il link generato, contatta api.polygon.io e ritorna i dati richiesti
async function callAPI(url, from){
    const response = await fetch(url);
    const data = await response.json();
    const { ticker, results } = data;

    price = [];
    date = [];


    prices(results);
    dates(from, results)

    if(a > 0){
        if(a>=4){
             openModal(modal);
        } else {
        a++;
        addData(c, ticker, price, a);
        }
    } else {
        c = newChart(ticker, price, date);
        a++;
    }
    return data;
}

// Funzione al momento inutile
function final(ticker, from, to){
    callAPI(generateURL(ticker, '1', 'day', from, to), from);
}


document.getElementById("btn").onclick = function(){final(document.getElementById('ticker').value.toUpperCase(), document.getElementById('from').value, document.getElementById('to').value)};