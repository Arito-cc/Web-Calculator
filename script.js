// Calculator program

const display = document.getElementById("display");


function appendtodisplay(input) {
    console.log(input);
    display.value += input;
}

function clearscr() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}