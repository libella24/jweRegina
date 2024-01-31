//true
if (typeof 'Apfel' == 'string') {

}

//true
if (1 > 0) {

}

//true
if (0 < 1) {

}

//true
if (1 == 1) {

}

//true – eines von beiden muss zutreffen
if (0 <= 1) {

}

// > ist größer als / < ist kleiner als


//false
if (0 > 1) {

}

//Kann in der Konsole getestet werden

//true
if (0 != 1) {

}

//false
if (0 == 1) {

}

//true – ! kehrt um bzw. negiert
if (!0 == 1) {

}

//false &&=und  – 1. und 2. Statement wird als eine Bedingung gesehen
if ((1 < 5) && (9 == 14)) {

}

//true     ||=oder
if ((1 < 5) || (9 == 14)) {

}

//true
if (1 == 1 || 2 > 1 || 4 == 6) {

}

//true
if (2 > 1 && 4 == 6) {

}

//false
if (2 == 2 && 3 == 2 || 1 == 1) {

}


//false
if ('Name' == 'Name2') {

}

//false
if ('Name' == '2') {

}

//true
if ('name'.length < 5) {

}

//true
if ('name'.length > 3) {

}


// indexOf - Wo ist` 0 wird mitgezählt (Cursor)


//true (VORSICHT: Stelle 0 vs Stelle 1 ) ( J=0 a=1)
if ('Jasmin'.indexOf('a') == 1) {

}


let vorname = 'Thomas';

switch (vorname) {
    case 'Roland':
        console.log('Ich bin Netflix Fan');
        break;

    case 'Thomas':
        console.log('Ich bin kein Netflix Fan');
        break;

    default:
        console.log('Alles halb so wild');
}


