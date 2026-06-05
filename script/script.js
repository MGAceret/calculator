const display = document.getElementById("display");
let previousValue = "";
let currentValue = "";

// Extracting Operator symbols for operate function
const operators = document.querySelectorAll(".operator")
let chosenOperator = ""

operators.forEach(button => {
    button.addEventListener("click", () => {
        
        // Operate if both values are not empty
        if(previousValue !== "" && currentValue !== "") {
            operate();
        } else { 
            previousValue = currentValue; // For first input
        }
        
        chosenOperator = button.textContent;
        currentValue = "";
        display.textContent = previousValue
    })
})


const numberValue = document.querySelectorAll(".number")

numberValue.forEach(button => {
    button.addEventListener("click", () => {
        currentValue += button.textContent;
        display.textContent = currentValue;
    })
})

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