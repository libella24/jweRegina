"use strict";

window.addEventListener("load", function() {

    let heading = document.getElementById("heading");

    heading.addEventListener("click", function() {
       let itemList = document.getElementById("items");
       
       let newItem = document.createElement("li");
       newItem.innerText = "Orange";
       newItem.style.color = "orange";

       itemList.appendChild(newItem);



    }, false);
    

}, false); 