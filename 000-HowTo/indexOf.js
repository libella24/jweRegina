 
//Wenn ein Wert im Index (nicht) vorhanden ist 
//=========================================== 
 
 
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