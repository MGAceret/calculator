const display = document.getElementById("display");
let previousValue = "";
let currentValue = "";

// Extracting Operator symbols for operate function
const operators = document.querySelectorAll(".operator")
let chosenOperator = ""
let lastOperator = ""
let isEqual = false

operators.forEach(button => {
    button.addEventListener("click", () => {

        // Ignore operator if no number has been entered
        if (currentValue === "" && previousValue === "") return;

        // Changing operator without currentValue placed
        if (currentValue === "") {
            chosenOperator = button.textContent;
            return;
        }
        
        // Operate if both values are not empty
        if(previousValue !== "") {
            if(isEqual == false) operate(); // Execute with operations only
        } else { 
            previousValue = currentValue; // For first input
        }
        
        lastOperator = chosenOperator;   // Save chosen operator for equals function
        chosenOperator = button.textContent;

        // Execute equals()
        if(chosenOperator !== "=") {
            currentValue = "";
        } else {
            chosenOperator = lastOperator
            equals();
        }

        display.textContent = previousValue
    })
})

// Input value
const numberValue = document.querySelectorAll(".number")

numberValue.forEach(button => {
    button.addEventListener("click", () => {
        
        // Clear inputs if equals is the last operator and had a number placed
        if (isEqual) {
            previousValue = ""
            currentValue = ""
            chosenOperator = ""
            isEqual = false
        }

        currentValue += button.textContent;
        display.textContent = currentValue;
    })
})

// Decimal/Float Value
const decimalPlace = document.querySelector(".decimal")

// Decimal placement, add/remove if its either empty or existing
decimalPlace.addEventListener("click", () => {
    if(!currentValue.includes(".")) {
        currentValue += ".";
    } else {
        currentValue = currentValue.replace(".", "");
    }
    display.textContent = currentValue;
});

// Backspace value
const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
    currentValue = currentValue.slice(0, -1)
    display.textContent = currentValue || 0
})

// Clear inputs
function clearValue() {
    previousValue = ""
    currentValue = ""
    chosenOperator = ""
    lastOperator = ""
    isEqual = false
    display.textContent = 0
}

// Operations
function add() {
    previousValue = Number(previousValue) + Number(currentValue)
}

function subtract() {
    previousValue = Number(previousValue) - Number(currentValue)
}

function multiply() {
    previousValue = Number(previousValue) * Number(currentValue)
}

function divide() {
    previousValue = Number(previousValue) / Number(currentValue)
}

function equals() {
    isEqual = true;
    operate();
    display.textContent = previousValue;
}

function operate() {
    switch(chosenOperator) {
        case "+":
            add();
            break;        
        case "−":
            subtract();
            break;
        case "×":
            multiply();
            break;
        case "÷":
            divide();
            break;
    }
}