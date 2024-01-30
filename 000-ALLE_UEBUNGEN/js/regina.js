//Einkaufsliste

let myShoppingList = ['Brot', 'Butter', 'Eier']; //Array - untereinander - length 0-2

console.log(myShoppingList);

//JS Output - innerHTML
//     getElementById über die ID des HTML Elements wird gesteuert, wo der //Code eingefügt werden soll
document.getElementById("demo").innerHTML=myShoppingList;// zeigt myShoppingList an

document.getElementById("next").innerHTML="Hello Dolly";
/*
document.write("schreibt einfach den Begriff in der Klammer"); ///schreibt einfach den Begriff in der Klammer auf die HTML Seite


window.alert("Alerting-Text")//Alerting

prompt("Eingabefeld - gib hier irgendwas ein!")//Eingabefeld - es kommt daraufhin ein "Uncaught (in promise) Error"
*/

// neues <input> erzeugen
let myInput = document.createElement;

// Wert hineinschreiben (durch simple Wertzuweisung)
myInput.value = "Hallo Welt!";

// Wert auslesen und in der Konsole ausgeben
console.log(myInput.value); // Hallo Welt!


let person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo2").innerHTML = carName;


//keine Ahnung, was das sein soll...
let getTextFromHtmlInput = function () {
    console.log(document.querySelector("input#newItem").value);
};


function ausgeben(ev) {
    document.getElementById('output').value = ev.target.value;
}

document.getElementById('volume').addEventListener('input', ausgeben);

//Thermostat

let temperature = 24;

console.log(temperature);
display.innerHTML= temperature;

let changeTemperature = function (direction){
if (direction == 'up') {
    temperature++
}
if (direction =='down') {
    temperature--
}
console.log(temperature);
display.innerHTML= temperature;
};


