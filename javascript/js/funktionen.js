let userNameFromDatabase ='Max';

function sayMyName(name) {
    if(checkMyInput(name) == true) {
    console.log('Your name is ' + name);
}
}


function checkMyInput(input) {
    if( typeof input == 'string' ) {
        //console.log('yes it is a string');
        return true;
    } 
    else {
        //console.log('Your Input is not a Name (or not a string)');
        return false;
    }
}


sayMyName('Thomas');
sayMyName('Manuel');
sayMyName(userNameFromDatabase);


let ergebnisMeinerFunktion  = sayMyName('Thomas');
