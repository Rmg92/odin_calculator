let displayNumber = '';
let operator = '';
let num1 = 10;
let num2 = 10;

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButtons = document.querySelectorAll('.clearButton');
const displayedNumber = document.querySelector('.displayNumber');


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayNumber += button.textContent;
        displayedNumber.textContent = displayNumber;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        console.log(operator);
        console.log(operate(num1, num2, operator));
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