let persons = [
    ["Erik", "Monika"],
    ["Paula", "Johannes", "Nadja"]];
    
    for (let course of persons) {
        for (let person of persons){
            console.log(person);
        };


/* 
Neues Item hinzufügen (PUSH)
=============================
let newStudent = "Johannes"
persons.push(newStudent);

Neues Item am Anfang hinzufügen (UNSHIFT)
=========================================
persons.unshift("Nadja");

Auf  Item zugreifen (CONSOLE.LOG[...])
======================================
console.log(persons[0]);

Anzahl er Items ausgeben (LENGTH)
=================================
persons.length;
alert("In dem Kurs sind "+ persons.length + " Teilnehmer.");


Letztes Item entfernen (POP)
============================
persons.pop();

Erstes Item entfernen (SHIFT)
=============================
persons.shift();

Removed Item anzeigen
======================
let removedPersons = persons.shift();
console.log(removedPersons);

Alle Einträge eines Arrays einzeln ausgeben (LET person/course,... OF array)
===============================================================
for (let person of persons) {
    console.log(person);
};
Alle Einträge aneinanderhängen
===============================
let output = "In unserem Kurs sind folgende Personen:";
for (let person of persons) {
    output = output + person  + ", "; //der Liste wird eine weitere Person angehängt
    
}
console.log(output);

Verschachtelte Arrays
=====================
let persons = [
    ["Erik", "Monika"],
    ["Paula", "Johannes", "Nadja"]];
    
    
    for (let course of persons) {
        for (let person of persons){
            console.log(person);
        }
    

  
*/} 

