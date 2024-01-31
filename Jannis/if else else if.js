//FOR und WHILE Schleife
//=======================
// FOR
//=====
for(let x = 0; x <= 10, x++) {  //es wird hinaufgezählt x=x+1, kurz x++, x+2 --> x+=2 bis zu 10
    console.log(x);

}
//WHILE
//======
let a = 0;
while (a <20) {
    console.log(a)
    a++;
}

//BREAK - Schleife wird abgebrochen, CONTINUE - Element wird übersprungen
//========================================================================
let students = ["Max", "Eva", "Laura", "Chris"];
let inArray = false;
for(let student of students)
{
    console.log(student);
    if (student=="Max")
}




/*
IF-größer/kleiner/ gleich/nicht
================================
if (!(a<15)) {
    console.log("Wenn A nicht kleiner als 15 ist, dann erfolgt eine Ausgabe")
}

let data = ["Max", "Eva", "Laura", "Chris"], 
if (data.indexOf("Müller") == -1){ //der Müller kommt in der Liste nicht vor, deshalb gibt die Konsole "-1" aus
    console.log("Herr Müller ist nicht im Array.");
};
if (data.indexOf("Max") != -1) {
    console.log("Max ist im Array");
};



VERKNÜPFUNGSTABELLE
====================
let tbodyAnd = document.getElementById("and").children[1];
let tbodyOr = document.getElementById("or").children[1];

let aValues = [true, false];
let bValues = [true, false];

for (let a of aValues) {
    for (let b of bValues) {
        let tr = document.createElement("tr");
        
    }
}
*/


/*
let x = 40;
let a = x > 10;
let b = x < 20;

if (x > 10 && x < 20) { 
    console.log("UND-Bedingung wird ausgeführt.");
}

if (x < 10 || x > 20){
    console.log("ODER-Bedingung wird ausgeführt")
}

//ELSE IF
//========

let getInhabitants = function(city) {
    if (city == "Berlin") {
        return 2500000;
    } else if (city == "Köln") {
        return 1500000;
    } else if(city =="München") {
    };
};
console.log(getInhabitants("Berlin"));
console.log(getInhabitants("Köln"));
*/