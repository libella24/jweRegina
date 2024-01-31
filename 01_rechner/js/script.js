/*
function parseInput(number_s, defaultValue) {


    const number = parseFloat(number_s);

    if (isNaN(number)) {
        return defaultValue;
    }

    else {
        return number;
    }
}
*/


function calculate() {

    const num1 = document.querySelector('#num1').value;
    // was bedeutet "parseInput" u. "parse" generell? – analysieren

    const num2 = document.getElementById('num2').value;
    // 'querySelector' – erstes Element im Code mit dieser ID – 'getElementById' alle Elemente mit dieser ID

    const operator = document.querySelector('operator').value;


    // Berechnung und speichern in einer dritten Variable
    let result;

    if (operator === '+') {
        result = num1 + num2;
    }

    else if (operator === '-') {
        result = num1 - num2;
    }

    else if (operator === '*') {
        result = num1 * num2;
    }

    else if (operator === '/') {
        result = num1 / num2;
    }

    // Ausgabe

    document.querySelector('#result').value = result;
}


function getNumbers(defaultValue) { // defaultValue? – getNumbers fiktiver Name?

    const numberElems = document.querySelectorAll('.number');
    //querySelectorAll = getElementsByClass ?

    let numbers = [];
    // leeres Array ? (Konstante ohne Wert - wird danach mit den Werten aus der Schleife befüllt)?

    for (let i = 0; i < numberElems.length; i++) {
        numbers.push(numberElems[i].value, defaultValue); // numbers.push? – default Value?
    }
    /* i Index=0; numberElems.length (Länge der Feldeingabe); Index = Index +1 ??
    numbers.push(numberElems[i].value, defaultValue); ?
    */

    return numbers;

}


function sum() {
    const numbers = getNumbers(0); // kann numbers aus der Funktion rausschauen?

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result += numbers[i];
    }

    document.querySelector('#result').value = result;
}


const button = document.querySelector('#button-calc');
button.addEventListener('click', calculate); // addEventListener (click) und Funktion calculate

document.querySelector('#button-sum').addEventListener('click', sum); // + Funktion sum


