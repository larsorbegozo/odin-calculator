// Variable definition
let first = 0, operator = "", second = 0
const numberButton = document.querySelectorAll('.number-container button')
const result = document.querySelector('#result')

numberButton.forEach((number) => {
    number.addEventListener('click', (e) => {
        if(parseInt(number.textContent) == number.textContent) {
            console.log(number.textContent)
            result.textContent = number.textContent
        } else {
            console.log(number.textContent)
            console.log("That's not a number")
        }

    })
})


// TODO:
// create input for each button

// let first, second, operator (when the operation is complete, first = result)
// so I can continue with the operations

// i.e. if + button is pressed, store it in a variable
// then, when another number is pressed, call the appropiate function
// and print the result (and store it in the "first" variable)

// function to clear everything

// function to show result (equals button)

// how to delete?
// how to integrate the dot?