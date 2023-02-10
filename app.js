"use strict";

// grab container

let bigQueu = document.querySelector('.historicalQueu');

// create array with 32 numbers

let array = [5, 3, 10, 25, 40, 20, 10, 5, 12, 31, 5, 3, 10, 25, 40, 20, 10, 5, 12, 31, 5, 3, 10, 25, 40, 20, 10, 5, 12, 31, 5, 3, 10, 25, 40, 20, 10, 5, 12, 31];

// get random queu number to push later

function newQueu(){
    return Math.floor(Math.random() * 32);
}

// create initLoop function

function initLoop(){
    
    setTimeout(showBars, 1000);
}

// create a function that creates a bar per element in the array

function showBars(){

    // if the container already has children (bars) it deletes them

    deleteBars();

    // for every element in the array..

    for (let i = 0; i < array.length; i++){

    // create a new bar

    let newBar = document.createElement('div');

    // assign it the classList "bar"

    newBar.classList.add('bar');

    // set its height in rems to whatever the array's element number is

    newBar.style.height = `${array[i]}rem`;
    

    // depending on the number, set its color to red, green or blue

    if (array[i] < 10){
        newBar.style.backgroundColor = "var(--green)";
    } else if (array[i] > 10 && array[i] < 20){
        newBar.style.backgroundColor = "var(--blue)";
    } else {
        newBar.style.backgroundColor = "var(--red)";
    }

    // append it to the big queu

    bigQueu.append(newBar);
    

}

newBar();

}

// create a function to change the array

function newBar(){

// create new random number

let newRandomNumber = newQueu();

// delete the first element of the array
array.shift();

// push the random number to the end of the array
array.push(newRandomNumber);


//start all over

initLoop();


}

// function to remove all children from main container

function deleteBars(){
    while (bigQueu.hasChildNodes()){
        bigQueu.removeChild(bigQueu.firstChild);
    }
    
}



initLoop();
