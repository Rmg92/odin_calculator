let displayNumber = '';
let storedNumber = '';
let operator = '';
let num1 = 10;
let num2 = 10;

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButtons = document.querySelectorAll('.clearButton');
const numberScreen = document.querySelector('.displayNumber');
const storedScreen = document.querySelector('.storedNumber');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayNumber += button.textContent;
        numberScreen.textContent = displayNumber;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent == '=') {
            displayNumber = operate(Number(storedNumber), Number(displayNumber), operator);
            storedNumber = '';
            operator = '';
            storedScreen.textContent = storedNumber;
            numberScreen.textContent = displayNumber;
        } else if (storedNumber == '') {
            storedNumber = displayNumber;
            displayNumber = '';
            operator = button.textContent;
            storedScreen.textContent = storedNumber + operator;
            numberScreen.textContent = displayNumber;
        } else {
            storedNumber = operate(Number(storedNumber), Number(displayNumber), operator);
            displayNumber = '';
            operator = button.textContent;
            storedScreen.textContent = storedNumber + operator;
            numberScreen.textContent = displayNumber;
        }
    })
})

clearButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
    })
})

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}