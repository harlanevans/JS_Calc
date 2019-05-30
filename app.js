// TODO
// Cache the DOM
// When press number, set view value to that number

// Numbers and Operations
var firstNum = 0;
var secondNum = 0;
var answerValue;
var opChosen;

// Clearing and viewing calulations
var clearCalc_button = document.getElementById('clearCalc');
var viewer_div = document.getElementById('viewer');

// Number Buttons
var zero_button = document.getElementById("calc-zero")
var one_button = document.getElementById("calc-one")
var two_button = document.getElementById("calc-two")
var three_button = document.getElementById("calc-three")
var four_button = document.getElementById("calc-four")
var five_button = document.getElementById("calc-five")
var six_button = document.getElementById("calc-six")
var seven_button = document.getElementById("calc-seven")
var eight_button = document.getElementById("calc-eight")
var nine_button = document.getElementById("calc-nine")

var add_button = document.getElementById('plus')
var minus_button = document.getElementById('minus')
var mult_button = document.getElementById('multiply')
var divide_button = document.getElementById('divide')
var equal_button = document.getElementById('equal')

// set number keys to a value,
// create an event listener for a click of that number
// set the viewValue_div to that number

function numberOne() {
  zero_button.addEventListener('click', function() {
    console.log("You pressed the number zero");
    viewer_div.innerHTML =+ '0'
  })
  one_button.addEventListener('click', function() {
    console.log("You pressed the number one");
    viewer_div.innerHTML =+ '1'
  })
  two_button.addEventListener('click', function() {
    console.log("You pressed the number two");
    viewer_div.innerHTML =+ '2'
  })
  three_button.addEventListener('click', function() {
    console.log("You pressed the number three");
    viewer_div.innerHTML =+ '3'
  })
  four_button.addEventListener('click', function() {
    console.log("You pressed the number four");
    viewer_div.innerHTML =+ '4'
  })
  five_button.addEventListener('click', function() {
    console.log("You pressed the number five");
    viewer_div.innerHTML =+ '5'
  })
  six_button.addEventListener('click', function() {
    console.log("You pressed the number six");
    viewer_div.innerHTML =+ '6'
  })
  seven_button.addEventListener('click', function() {
    console.log("You pressed the number seven");
    viewer_div.innerHTML =+ '7'
  })
  eight_button.addEventListener('click', function() {
    console.log("You pressed the number eight");
    viewer_div.innerHTML =+ '8'
  })
  nine_button.addEventListener('click', function() {
    console.log("You pressed the number nine");
    viewer_div.innerHTML =+ '9'
  })
  chooseOperator();
}

function chooseOperator() {
  var operator = document.getElementsByClassName("ops")
  for (i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {

    })
  }
}


numberOne();
