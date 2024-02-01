//iteriert Einträge anhand des Index, Element 
//=============================================== 
//(this) kann verwendet werden 
 
// zB unordered List 
 
<ul> 
  <li>foo</li> 
  <li>bar</li> 
</ul> 
 
$( "li" ).each(function( index ) { 
    console.log( index + ": " + $( this ).text() ); 
  }); 
 
  //Output 
  //0: foo 
  //1: bar 
 
 
 
//Beispiel 
let showAnswers = function (index) { 
    let answers = quiz[index].a; 
    // vor befüllen leeren 
    $("#answers").empty(); 
    // Jede Frage einzel in das div#answers einfügen 
    $(answers).each(function (index, answer) { 
        $("#answers").append(` 
            ${index}: <button data-index="${index}" class="answer-btn">${answer}</button><br> 
        `); 
    }); 
}; 
 
//THIS 
//===== 
<p> 
<span>(click here to change)</span> 
<ul> 
  <li>Eat</li> 
  <li>Sleep</li> 
  <li>Be merry</li> 
</ul> 
</p> 
 
  
<script> 
$( "span" ).on( "click", function() { 
  $( "li" ).each(function() { 
    $( this ).toggleClass( "example" ); 
  }); 
}); 
</script>