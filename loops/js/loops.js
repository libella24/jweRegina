
let namen = [
    'Robert',
    'Jasmin',
    'Ulvi',
    'Willi'
];


/* Fix definierte Anzahl von Loops mit einer Laufzeitvariablen (i) */

for(let i = 0; i < 3; i++) {
    console.log('hey: ' + i);

    let html = '<img src="https://placehold.it/300x200?text='  + namen[i] + '">';

    console.log(html);

    document.getElementById('gallery').innerHTML += html;

    document.getElementById('gallery').innerHTML = document.getElementById('gallery').innerHTML =document.getElementById('gallery').innerHTML

}


/* Ausgabe eines Arraya ohne die Länge zu wissen*/

namen.forEach(elm => {
    //console.log(elm);

    let html = '<img src="https://placehold.it/300x200?text='  + elm + '">';

    document.getElementById('gallery').innerHTML += html;
});