// Variable definition
let first = ""
let operator = ""
let second = ""
let isFirstAlreadyPressed = false
let isOperationReady = false
let operationStatus = 0
const numberButton = document.querySelectorAll('.number-container button')
const operatorButton = document.querySelectorAll('.operator-container button')
const deleteButton = document.querySelector('#delete')
const clearButton = document.querySelector('#clear')
const operation = document.querySelector('#operation')
const result = document.querySelector('#result')

numberButton.forEach((number) => {
    number.addEventListener('click', () => {
        if(parseInt(number.textContent) == number.textContent && !isFirstAlreadyPressed) {
            operation.textContent += number.textContent
            first = operation.textContent
            console.log(`first: ${first}`)
        } else if(parseInt(number.textContent) == number.textContent && isFirstAlreadyPressed) {
            operationStatus = 2
            operation.textContent += number.textContent
            second += number.textContent
            console.log(`second: ${second}`)
        } else if(number.textContent == "=" && first !== "" && second !== "" && operator !== "") {
            if(operator == "+") {
                result.textContent = add(+first, +second)
            } else if (operator == "-") {
                result.textContent = subtract(+first, +second)
            } else if (operator == "x") {
                result.textContent = multiply(+first, +second)
            } else if (operator == "÷") {
                result.textContent = divide(+first, +second)
            }
            first = result.textContent
            second = ""
            operationStatus = 1
        }
         else {
            console.log("error1")
        }
    })
})

operatorButton.forEach((operatorPressed) => {
    operatorPressed.addEventListener('click', () => {
        operationStatus = 1
        if(!isOperationReady) {
            operation.textContent += ` ${operatorPressed.textContent} `
            operator = operatorPressed.textContent
            console.log(`operator: ${operator}`)
            isFirstAlreadyPressed = true
            isOperationReady = true
        } else if(isOperationReady) {
            operator = operatorPressed.textContent
            console.log(`operator: ${operator}`)
            if(first !== "" && second !== "" && operator !== "") {
                if(operator == "+") {
                    result.textContent = add(+first, +second)
                } else if (operator == "-") {
                    result.textContent = subtract(+first, +second)
                } else if (operator == "x") {
                    result.textContent = multiply(+first, +second)
                } else if (operator == "÷") {
                    result.textContent = divide(+first, +second)
                }
            }
            first = result.textContent
            second = ""
            console.log(`first 2: ${first}`)
            console.log(`second 2: ${second}`)
            isFirstAlreadyPressed = true
            operation.textContent = `${first} ${operator} `
        } else {
            console.log("error2")
        }
    })
})

clearButton.addEventListener('click', () => {
    clearCalculator()
})

deleteButton.addEventListener('click', () => {
    if(operationStatus == 0) {
        first = first.slice(0, first.length - 1)
        operation.textContent = first
    } else if(operationStatus == 1) {
        operator = ""
        operation.textContent = `${first} ${operator}`
        operationStatus = 0
    } else if(operationStatus == 2) {
        second = second.slice(0, second.length - 1)
        operation.textContent = `${first} ${operator} ${second}`
        if(second === "") {
            operationStatus = 1
        }
    }
})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function clearCalculator() {
    first = ""
    second = ""
    operator = ""
    isFirstAlreadyPressed = false
    isOperationReady = false
    result.textContent = "0"
    operation.textContent = ""
    operationStatus = 0
}

// TODO:
// [x] create input for each button

// [] let first, second, operator (when the operation is complete, first = result)
// so I can continue with the operations

// [] i.e. if + button is pressed, store it in a variable
// then, when another number is pressed, call the appropiate function
// and print the result (and store it in the "first" variable)

// [] function to clear everything

// [] function to show result (equals button)

// how to delete?
// how to integrate the dot?