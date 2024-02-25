// Javascript program for guessing a number..

const prompt = require("prompt-sync")({sigint:true});

// Program:-

// let num = prompt("Enter a number between 1 to 100..: ");
// num = Number.parseInt(num);

let num = Math.floor((Math.random()*100) + 1);
let chances = 0;


while(true)
{
    let n = prompt("Enter the correct number..: ");
    n = Number.parseInt(n);

    chances++;

    if(num == n)
    {
        console.log("You hit the correct number..");
        break;
    }
    else if( num > n ){
        console.log("Entered number is less than the correct number..");
    }
    else if(num < n){
        console.log("Entered number is greater than the correct number..");
    }
    else{
        console.log("Enter a valid value..");
    }
};

console.log("Your total chances for the hit were.. :",chances);
console.log("Your total score is..: ", 100-chances);
console.log("The correct number was: ", num);



// let random = Math.floor(Math.random()*10 + 1);
// console.log(random);

// Math.floor(Math.random()*100 + 1)