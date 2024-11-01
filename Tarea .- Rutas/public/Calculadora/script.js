function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.innerText[display.innerText.length - 1];

    if ("+-*/".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
