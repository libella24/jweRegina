var ganzZahl;
//console.log(ganzZahl);
ganzZahl = 5;
//console.log(ganzZahl);
ganzZahl = 4 + 5;
//console.log(ganzZahl);

ganzZahl = ganzZahl + 1;
//console.log(ganzZahl);

ganzZahl = ganzZahl + 4.5;
//console.log(ganzZahl);


var aufsteigendeZahl = 1;
//console.log(aufsteigendeZahl);

aufsteigendeZahl++;
//console.log(aufsteigendeZahl);


//console.log(10+10);


var absteigendeZahl = 10;
absteigendeZahl--;
//console.log(absteigendeZahl);


var zahlALsText = "3e";
//console.log(zahlALsText);
//console.log(typeof zahlALsText);

zahlALsText = parseInt(zahlALsText);
//console.log(zahlALsText);
//console.log(typeof zahlALsText);

//console.log(zahlALsText * 3);


var number1 = "2";
var number2 = "7";

//console.log(number1 * number2);


var number1 = 3;
var number2 = 4;

//console.log(number1 * number2);


var spruch = "hallo,";
//console.log(spruch);

spruch = spruch + "welt!";
//console.log(spruch);

spruch = "<={" + spruch + "}=>";
//console.log(spruch);



var inputFeld1 = '<input type="text" value="test">';
//console.log(inputFeld1);

var inputFeld2 = "<input type=\"text\" value=\"test\">";
//console.log(inputFeld2);

//document.write('hallo');
//document.write('<br> ich bin eine neue Codezeile');





//Array  – [] Eckige Klammern ist automatisch Array

var farben = [
    'rot',
    'gelb',
    'grün'
];
//console.log(farben[2]);
var farbenAlsText = farben.join( '/');
//console.log(farbenAlsText);

var katalog = [
    'Inhaltsverzeichnis', //0
    ['Absatz 1', 'Absatz 2'], //1    Beispiel 2Pos.(Absatz 1 und Absatz 2) 1.Eintrag(Absatz)
    'Kapitel 2', //2
    'Kapitel 3' //3
];
//console.log(katalog[1][0]);

//console.log(katalog);
katalog.pop(); // pop = Rauslöschen (immer die letzte Stelle!! (Kapitel 3))
katalog.push('Kapitel 5'); // push = Hinzufügen (Kapitel 5)


/* Mehrzeiliger Kommentar
Mehrzeiliger Kommentar
Mehrzeiliger Kommentar
*/



var neuesArray = [];
//console.log(neuesArray[0]);

//katalog[0] = 'Inhaltsverzeichnis NEU';  // = Überschreiben von Inhaltsverzeichnis
//console.log(katalog);

//oder

katalog[0] = katalog[0] + ' NEU';
//console.log(katalog);





//Objekt – {} geschwungene Klammer immer Object

var speicherplatzzugriffsname = 'groesse';


var ich = {
    vorname: 'Thomas',
    nachname: 'Astleithner',
    groesse: '180', // Keine Umlaute oder z.B. ß = Englisch
    alter: '48',

    kopf: {
        augen: 'grün',
        haare: 'braun'
    }
};

//console.log('Hallo, ich bin ' + ich.vorname + '!');
//console.log('Aktuell bin ich ' + ich.alter + 'Jahre alt');
//console.log('Meine Augen haben die Farbe ' + ich.kopf.augen + '');

//console.log(ich['vorname'])

//console.log(ich[speicherplatzzugriffsname]);  // Bezieht sich erst auf "var ich"!!!



//Konstante

const USER_NAME = 'Thomas';
console.log(USER_NAME);

//USER_NAME = 'Thomas'; //erzeugt dann ERROR!


//Variablen

var example1 = 'hui'; //var und let - var ist veraltet aber noch in Gebrauch – var kann mit let ersetzt werden


{
    let example1 ='jump';  // geschwungene Klammer {} außenrum (Scope) ist geschützter Bereich! – mit let!
    console.log(example1);
}

//console.log(example1);












