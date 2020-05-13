// JavaScript File
function pizzaInput() {
    let outputString = "Your order: \n";
    let size = document.getElementById("pizzabox").value;
    let pizzaPrice = 0;
    if ((size == "L") || (size == "l")){
      pizzaPrice = 6;
      outputString = outputString + "- Large: $6.00 \n"; 
    } 
    else if ((size == "J") || (size == "j")){
      pizzaPrice = 10;
      outputString = outputString + "- Jumbo: $10.00 \n"; 
    }
    
    else {
        alert("You must pick a pizza size first!");
    }
    
let totalTopPrice = 0;
  
let pep = document.getElementById("pep").value;
if (pep == "1"){
    totalTopPrice = totalTopPrice + 1;
    outputString = outputString + "- Pepperoni: $1.00 \n";
}

let mush = document.getElementById("mush").value;
if (mush == "2"){
    totalTopPrice = totalTopPrice + 1.75;
    outputString = outputString + "- Mushroom: $1.75 \n";
}

let pepper = document.getElementById("pepper").value;
if (pepper == "3"){
     totalTopPrice = totalTopPrice + 2.5;
     outputString = outputString + "- Pepper: $2.50 \n";
}

let bacon = document.getElementById("bacon").value;
if (bacon == "4"){
    totalTopPrice = totalTopPrice + 3.35; 
    outputString = outputString + "- Bacon: $3.35 \n";
}

let subTotal = pizzaPrice + totalTopPrice;
outputString = outputString + "- Subtotal: $" + subTotal.toFixed(2)+"\n" ;
let finalPrice = subTotal * 1.13;
outputString = outputString + "- Tax : $" + subTotal*0.13.toFixed(2) +"\n";
outputString = outputString + "The final price of the pizza is $" + finalPrice.toFixed(2);
alert(outputString);
}