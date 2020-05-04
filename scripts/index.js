const formList = document.querySelector('.buttons form');
const screen = document.querySelector('#screen');
const body = document.querySelector("body");

let operator;
let numbersEntered1 = [];
let numbersReduced1;
let numbersParsed1;
let numbersEntered2 = [];
let numbersReduced2;
let numbersParsed2;
let equal;

function parsing (a) {return Number(a)};

function clicked(event) {

  if(event.target.className == "data"){
    const number = event.target.value;

    if (operator) {
      numbersEntered2.push(number);
      numbersReduced2 = numbersEntered2.join("");
      numbersParsed2 = parsing(numbersReduced2);
      screen.value = numbersParsed2;
    } else {
      numbersEntered1.push(number);
      numbersReduced1 = numbersEntered1.join("");
      numbersParsed1 = parsing(numbersReduced1);
      screen.value = numbersParsed1;
    }
  }
  if(event.target.className == "operator"){
    operator = event.target.value;
    screen.value = operator; 
  }  

  if(event.target.className == "transform") {
    const tran = event.target.value;

    if (tran == "+/-") {
      let value = screen.value;
      if (value > 0){
        equal = -(value);
      } else {
        equal = Math.abs(value);
      }
    }
    if (tran == "%") {
      let value = screen.value;
      equal = value / 100;
    }
    if (tran == "C") {
      equal = ""; 
    }
    screen.value = equal;
  }

  if(event.target.className == "sum"){
    if (operator == "+") {
      equal = numbersParsed1 + numbersParsed2;
    }
    if (operator == "-") {
      equal = numbersParsed1 - numbersParsed2;
    }
    if (operator == "/") {
      equal = numbersParsed1 / numbersParsed2;
    }
    if (operator == "*") {
      equal = numbersParsed1 * numbersParsed2;
    }
    console.log(numbersParsed1 , operator , numbersParsed2, "this numbersParsed1 + operator + numbersParsed2");

    screen.value = equal;
  } 

} 

formList.addEventListener('click', clicked);
body.addEventListener("keypress", function () {console.log("keyclicked")});