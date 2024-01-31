// Mein Versuch

/*
let lauf = 5;
let stern = '*';

for (let i=0; i < lauf; i++) {

}
*/

/*
for (let line = "*"; line.length < 8; line += "**")
  console.log(line);
  */




// Version von Manuel

/*
let output = '*';
let spaceFromLeft;
const stamm = output;

for (let i = 1; i <= 6; i++) {
    //console.log(i);

    if(i == 1) {
        spaceFromLeft = '    ';
    } 
    if(i == 2) {
        spaceFromLeft = '   '
    } 
    if(i == 3) {
        spaceFromLeft = '  '
    } 
    if(i == 4) {
        spaceFromLeft = ' '
    } 
    if(i == 5) {
        spaceFromLeft = ''
    } 

    if(i != 1) {
        output = output + '**';
    }

    if(i == 6) {
        console.log('    *');
    } else {
        console.log(spaceFromLeft + output);
    }


}
*/


/*
// Version von Ulvi

let treeSize = 20;
 
let star = "*"
let space = " ";
 
let output = "";
 
let cnt1 = treeSize - 1;
let cnt2 = 1;
 
for (let i = 0; i < treeSize; i++) {
 
    let starCnt = "";
    let spaceCnt = "";
 
    for (let j = 0; j < cnt1; j++)
        spaceCnt += space;
 
 
    for (let k = 0; k < cnt2; k++)
        starCnt += star;
 
 
    output = spaceCnt + starCnt;
    console.log(output);
 
    cnt1--;
    cnt2 += 2;
}
 
let spaceCnt = "";
 
for (let j = 0; j < treeSize - 1; j++)
    spaceCnt += space;
 
console.log(spaceCnt + "*")
*/



//let runCount = 0;
let item = '*';
let space = '';


for (let runCount = 0; runCount < 10; runCount++) {

    if (runCount == 0) {
        space = '     x' + item;
    }

    if (runCount == 1) {
        item += '**'
    }

    if (runCount == 2) {
        item += '**'
    }

    console.log(item);

}







