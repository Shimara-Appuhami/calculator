function fn0(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 0;
}
function fn1(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 1;
}
function fn2(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 2;
}
function fn3(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 3;
}
function fn4(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 4;
}
function fn5(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 5;
}
function fn6(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 6;
}
function fn7(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 7;
}
function fn8(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 8;
}
function fn9(){
    let previouse = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previouse + 9;
}
function feraser(){
    let previouse = document.getElementById("display").innerHTML;
    let eraser = previouse.slice(0, -1)
    document.getElementById("display").innerHTML = eraser
}

let firstSave;
let op;

function addition(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 1;
}
function mn(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 2;
}
function ml(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op = 3;
}
function dv(){
    firstSave = document.getElementById("display").innerHTML;//add value firstsave variable  
    document.getElementById("display").innerHTML = "";
    op = 4;
}
function percent() {
    let displayValue = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = parseFloat(displayValue) / 100;
}

function eq() {
    let secondSave = parseFloat(display.value);
    if (op === null) return; // No operation set
    switch (op) {
        case 1:
            display.value = firstSave + secondSave;
            break;
        case 2:
            display.value = firstSave - secondSave;
            break;
        case 3:
            display.value = firstSave * secondSave;
            break;
        case 4:
            if (secondSave === 0) {
                display.value = "Infinity"; // Handle division by zero
            } else {
                display.value = firstSave / secondSave;
            }
            break;
        default:
            display.value = "Invalid operation";
    }
}
function fn(value) {
    document.getElementById("display").value += value;
}

function feraser() {
    let displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function eq() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}
function clearAll() {
    let currentInput = '';
    let firstsave = null;
    let currentOperation = null;
    let pendingOperation = null;

    display.value = '';
}
function fn(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;
    
    // Check if the value is an operator
    if (isOperator(value)) {
        // Check if the last character in the display is an operator
        if (isOperator(currentValue.slice(-1))) {
            // Replace the last operator with the new one
            display.value = currentValue.slice(0, -1) + value;
        } else {
            // Append the provided value to the display
            display.value += value;
        }
    } else {
        // If the value is not an operator, append it to the display
        display.value += value;
    }
}

// Function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
