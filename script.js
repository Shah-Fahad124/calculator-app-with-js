let display = document.querySelector('.input')
let buttons = document.querySelectorAll('button')

let displayString = "";

let buttonsArray = Array.from(buttons);
buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'DEL') {
            displayString = displayString.substring(0, displayString.length - 1);
            display.value = displayString
        }
        else if (e.target.innerHTML == 'AC') {
            displayString = "";
            display.value = displayString;
        }
        else if (e.target.innerHTML == '=') {
            displayString = eval(displayString)
            display.value = displayString;
        }
        else {
            displayString += e.target.innerHTML;
            display.value = displayString;
        }
    });
})