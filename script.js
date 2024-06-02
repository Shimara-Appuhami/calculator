let display = document.getElementById('display');
let currentInput = '';
let firstsave = null;
let currentOperation = null;

function inputNumber(num) {
    currentInput += num;
    display.textContent = currentInput;
}

function eraseLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}

function clearAll() {
    currentInput = '';
    firstsave = null;
    currentOperation = null;
    display.textContent = '';
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (firstsave === null) {
        firstsave = parseFloat(currentInput);
    } else if (currentOperation) {
        firstsave = operate(firstsave, parseFloat(currentInput), currentOperation);
    }
    currentOperation = operation;
    currentInput = '';
    display.textContent = '';
}

function calculate() {
    if (currentInput === '' || currentOperation === null) return;
    let secondValue = parseFloat(currentInput);
    let result = operate(firstsave, secondValue, currentOperation);
    display.textContent = result;
    currentInput = '';
    firstsave = result;
    currentOperation = null;
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
