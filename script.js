let ctr=1;
function addtodo(){
    let inel = document.querySelector("input");   //fetching input element
    let mainvalue = inel.value;                   //getting value from input element

    let newdivel = document.createElement("div");  //creating new div element
    newdivel.setAttribute("id", ctr);             //when creating div, setting id attribute to ctr value
    
    //adding value from input to new div element, also wrto syntax code, with string concatination we can delete the value from 
    // input after adding it to new div element.
    //below will also add a delete button to each todo item
    newdivel.innerHTML ="<div>" + mainvalue +"</div><button onclick='deletetodo(" + ctr +")'>Delete</button>";   //calling delete function on button click with ctr value as id
    document.querySelector("body").appendChild(newdivel);  //appending new div to body
    ctr+=1;
}
function deletetodo(index){
    let deleel = document.getElementById(index); //fetching div element with id as index
    deleel.parentNode.removeChild(deleel);       //removing that element
} 






 























