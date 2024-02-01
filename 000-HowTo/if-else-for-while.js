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
 
 
 
 
//BEISPIELE 
//========== 
setTimeout(function () { 
 
    $("#result").empty(); 
 
    $("#answers button").prop("disabled", false); 
    $("#answers button:focus").css("background-color", ""); 
    if (currentQuestion < quiz.length - 1) { 
        currentQuestion++; 
 
        showQuestion(currentQuestion); 
    } else { 
        showResult(); 
    } 
}, 3000); 
 
     
    const checkAnswer = function (questionIndex, answerIndex) { 
        // prüfen ob eine frage richtig beantwortet wurde 
     
        let correctAnswer = quiz[questionIndex].correct; 
        let givenAnswer = answerIndex; 
     
        if (givenAnswer == correctAnswer) { 
            console.log("✓ - Frage RICHTIG beantwortet!"); 
            //alert("✓ - Frage RICHTIG beantwortet!"); 
            document.getElementById("result").innerHTML = "✓ - Frage RICHTIG beantwortet!"; 
            // Gib der gewählten Antwort eine Farbe 
            $("#answers button:focus").css({ 
                "background-color": "green", 
                color: "darkgreen", 
            }); 
            correctAnswers++; 
        } else { 
            console.log("X -Frage FALSCH beantwortet!"); 
            document.getElementById("result").innerHTML = "X -Frage FALSCH beantwortet!"; 
            // Gib der gewählten Antwort eine Farbe 
            $("#answers button:focus").css({ 
                "background-color": "red", 
                color: "deepred", 
            }) 
            ; 
        }