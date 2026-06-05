const display = document.getElementById("display");
let previousValue = "";
let currentValue = "";



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
    console.log(previousValue)
    previousValue = Number(previousValue) + Number(currentValue)
    currentValue = ""
}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate() {

}