//BEISPIEL 
//======== 
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
 