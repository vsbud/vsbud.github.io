const numberButtons = document.querySelectorAll(["[data-number]"])
const operationButtons = document.querySelectorAll(["[data-operation]"])
const equalsButton = document.querySelector(["[data-equals]"])
const deleteButton = document.querySelector(["[data-delete]"])
const allClearButton = document.querySelector(["[data-all-clear]"])
const previousValueTextElement = document.querySelector("[data-previous-value]")
const currentValueTextElement = document.querySelector("[data-current-value]")

var currentValue = ""
var previousValue = ""
var operation = undefined
var computed = false

function clearAll() {
    currentValue = "";
    previousValue = "";
    operation = undefined;
}

function deleteNumber() {
    if (currentValue.length > 0) {
        currentValue = currentValue.substring(0, currentValue.length - 1)
    } else {

    }

}

function appendNumber(newNumber) {
    if (computed === true) {
        computed = false
        currentValue = ""
    } else {

    }


    if (newNumber === ".") {
        if (currentValue.includes(".")) {
            
        } else {
            currentValue = currentValue + newNumber;
        }

    } else {
        currentValue = currentValue + newNumber;        
    }

}

function compute() {
    previousValueCut = previousValue.substring(0, previousValue.length-2)

    if (previousValue.length > 0 && currentValue.length > 0 && operation !== undefined) {
        switch (operation) {
            case "+":
                currentValue = parseFloat(previousValueCut) + parseFloat(currentValue)
                previousValue = ""
                break;
            case "*":
                currentValue = parseFloat(previousValueCut) * parseFloat(currentValue)
                previousValue = ""
                break;
            case "-":
                currentValue = parseFloat(previousValueCut) - parseFloat(currentValue)
                previousValue = ""
                break;
            case "/":
                currentValue = parseFloat(previousValueCut) / parseFloat(currentValue)
                previousValue = ""
                break;
        operation = undefined
        computed = true
        }
    }  else {

    }


}

function chooseOperation(operationText) {
    if (operation === undefined && previousValue.length === 0 && currentValue.length > 0) {
        previousValue = currentValue + " " + operationText
        currentValue = ""
        operation = operationText
    } else if (operation !== undefined && previousValue.length > 0 && currentValue.length === 0) {
        previousValue
        operation = operationText
        
    } else {
        
    }

    //previousValue = currentValue + " " + operationText
    //currentValue = ""
    //operation = operationText

}

function updateDisplay() {
    currentValueTextElement.innerHTML = currentValue;
    previousValueTextElement.innerHTML = previousValue;
}



numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        appendNumber(button.innerText);
        updateDisplay();

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        chooseOperation(button.innerText);
        updateDisplay();

    })
})

allClearButton.addEventListener('click', () =>{
    clearAll();
    updateDisplay();
})

equalsButton.addEventListener('click', () =>{
    compute();
    updateDisplay();

})

deleteButton.addEventListener('click', () => {
    deleteNumber();
    updateDisplay();
})