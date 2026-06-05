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

function updateDisplay(value) {
    display.innerHTML += value;
}


// Operations
function add() {
    previousValue = Number(previousValue) + Number(currentValue)
}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate() {
    switch(chosenOperator) {
        case "+":
            add();
            break;        
        case "-":
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