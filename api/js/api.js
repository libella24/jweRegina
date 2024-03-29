

let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1';
let params = {}; // Füllung optional

let response;

window.setInterval(function() {
    // AJAX Request wiederholt sich
    console.log('AJAX Request');
}, 3000);

let myChart = $('#myChart');

/*function createChart(labels, data) {
    
    myChart = new Chart(myChart, {

        // https://www.chartjs.org/docs/latest/charts/line.html
        
        type: 'line',

        data: {

            // array aus dem response
            labels: labels,

            datasets: [{
                label: 'Coin Price in USD',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }


    });
}*/

$('#update_btn').click(function () {  // anfang

    $.ajax({
        url: endpoint,
        data: params,
        dataType: 'json',
        type: 'GET',

        success: function(response) { // bei Erfolg kann ich die Daten weiterverarbeiten (data = response)
            
            console.log(response);

            window.response = response;


            //Datentyp: JSON !!!!!!!

let html = '';


            let labelsArray = [];
            let dataArray = [];
            
            $(response.data).each(function(index, eintrag) {
                 
                // Ausgabe im HTML
                
                    html += `<strong class="price">${eintrag.priceUsd}</strong>`;
                    html += `<span class="time">${eintrag.time}</span>`;
                    html += '<br>';
                


                /**
                 * 
                 * Die folgenden Zeilen verwenden dynamische Werte aus dem API Request
                 * 
                 */

                // Timestamp in Datum umformatieren
                // https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
                let time = new Date(eintrag.time);
                time = `${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}`;

                // einer global verwendbaren Variable zuweisen
                labelsArray[index] = time;

                // gerundet auf 2 Nachkommerstellen
                let roundedPrice = Math.round(eintrag.priceUsd);

                // einer global verwendbaren Variable zuweisen
                dataArray[index] = roundedPrice;


            });

            createChart(labelsArray, dataArray);


            // $('#response').html(html);

        }

    });

});

/*

let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1'
//es lassen sich abfrage parameter abschicken
let params ={};

let response;

$('#update_btn').click(function(){
    $.ajax({
        type: "GET",
        url: endpoint,
        data: params,
        dataType: "json",

        //wenn ich daten erhalten dann kan ich sie weiter verarbeiten
        success: function (response) {

            //wird auf die globale response übernommen
            window.response = response;
            console.log(response);

            /*
            Siehe Doku

            response = {}

            ['data']: {

            }
*/

/*
//Daten: JSON/ der datentyp muss umgewandelt werden
$('#response').html(JSON.stringify(window.response.data[1]));


}
});
});
*/

/*
let endpoint = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1';
let params = {};

let response;

$('#update_btn').click(function () {

    $.ajax({
        url: endpoint,
        data: params,
        dataType: 'json',
        type: 'GET',

        success: function (response) {

            console.log(response);
            window.response = response;

            let html;
            $(response.data).each(function (index, eintrag) {
                html += `<strong class="price">${eintrag.priceUsd}</strong>`;
                html += `<span class="time">${eintrag.time}</span>`;
                html += '<br>';
            });

            $('#response').html(html);

        }

    });

});
*/



