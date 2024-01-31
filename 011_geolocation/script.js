const map = L.map('map');


function onPositionSuccess(position) {
    console.log(position);
    // position.coords.longitude
    // position:coords.latitude

    const center = [position.coords.latitude, position.coords.longitude];

    map.setView(center, 13);

    L.marker(center).addTo(map) // Marker Symbol auf Karte

    L.circle(center, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: position.coords.accuracy
    }).addTo(map);

}



function onPositionError(error) {
    console.log(error);
}

function getPosition() {
    navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError, {
        enableHighAccuracy: true
    });

}

const output = document.querySelector('#output');

if (navigator.geolocation) {
    // Geolocation existiert!
    output.textContent += 'Der Browser unterstützt die Geolocation API –';

    // Ueberprüfen ob wir auf die Position zugreifen dürfen:
    navigator.permissions.query({ name: 'geolocation' })
        .then(function (result) {
            console.log(result);

            if (result.state === 'prompt') { // state prompt
                output.textContent += ' Der User wird noch gefragt, ob auf die Position zugegriffen werden darf';
                getPosition();
            }
            else if (result.state === 'granted') {
                output.textContent += ' Der User hat der Seite erlaubt, auf die Position zuzugreifen';
                getPosition();
            }
            else if (result.state === 'denied') {
                output.textContent += ' Der User hat der Seite NICHT erlaubt, auf die Position zuzugreifen';
            }

            else {
                console.log('Unbekannter state: ' + result.state);
            }
        });
}
else {
    console.log('Der Browser unterstützt die Geolocation API nicht!');
    output.textContent += ' Der Browser unterstützt die Geolocation API nicht!';
}

//const map = L.map('map').setView([47.8, 13.03], 13); // ('map') = div id="map" in HTML  // ist jetzt oben

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);