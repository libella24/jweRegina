let zufallszahl;

let farben = [
    'yellow',
    'brown',
    'deepred',
    'green',
    'orange'
];


/*
function randomColor() {

    let zufallszahl = Math.floor(Math.random() * farben.length);

    return farben[zufallszahl];
}

$('button.random').click(function () {
    $('#farbe').css({
        'background-color': randomColor()
    });


});
*/


// Immer andere Farbe


function randomColor() {

    let neueZahl = Math.floor( 
        Math.random() * farben.length 
    );

    if( neueZahl != zufallszahl) {
        zufallszahl = neueZahl;

        $('#farbe').css({
            'background-color' : farben[zufallszahl]
        });
        
        console.log(farben[zufallszahl]);

    } else {
        randomColor();
    }
}


$('button.random').click( function(){
    randomColor();
});