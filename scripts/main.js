let numOutput = '';
var numInput = document.querySelector('.display > p');
const button0 = document.getElementById('btn0');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');
const button7 = document.getElementById('btn7');
const button8 = document.getElementById('btn8');
const button9 = document.getElementById('btn9');
const btnAllClear = document.getElementById('all-clear');
const btnRecentClear = document.getElementById('recent-clear');
const buttonEqual = document.getElementById('equals');
const buttonAdd = document.getElementById('btnAdd');
const buttonSub = document.getElementById('btnSub');
const buttonMul = document.getElementById('btnMul');
const buttonDiv = document.getElementById('btnDiv');
const decimal = document.getElementById('decimal');
const maxDisplayLength = 10;
var lastValue = 0;
var input = 0;
var operation = 0;

function addDisplay(value) {
    if (operation == 0 || '') {
        lastValue = 0;
    }
    if (input.length >= maxDisplayLength) {
        numInput.innerHTML = "Error"
    } else {
        numInput.innerHTML = value;
        input = numOutput += value;
        numInput.innerHTML = input;
    }
}

function add(a, b) {
    var added = a + b;
    lastValue = added;
}

function subtract(a, b) {
    var subtracted = a - b;
    lastValue = subtracted;
}

function multiply(a, b) {
    var multiplied = a * b;
    lastValue = multiplied;
}

function divide(a, b) {
    var divided = a / b;
    lastValue = divided;
}

function clearRecent() {
    numInput.innerHTML = 0;
    input = 0;
    numOutput = '';
}

function clearAll() {
    numInput.innerHTML = 0;
    input = 0;
    numOutput = '';
    lastValue = 0;
    operation = 0;
}

function addDecimal() {
    if (input === 0) {
        addDisplay('0.');
    } else {
        if (input.indexOf('.') == -1) {
            addDisplay('.');
        }
    }
}

function equate() {
    input = parseFloat(input);
    lastValue = parseFloat(lastValue);
    switch (operation) {
        case 1:
            add(lastValue, input);
            break;
        case 2:
            subtract(lastValue, input);
            break;
        case 3:
            multiply(lastValue, input);
            break;
        case 4:
            divide(lastValue, input);
            break;
    }
    numInput.innerHTML = parseFloat(lastValue.toFixed(2));
    lastValue = parseFloat(lastValue.toFixed(2));
    check()
    error()
    operation = 0;
    input = 0;
    numOutput = '';
}
function check() {
    lastValue = '' + lastValue;
    if (lastValue.length >= maxDisplayLength) {
        numInput.innerHTML = 'Error';
    }
}

function error() {
    lastValue = '' + parseFloat(lastValue);
    if (lastValue.indexOf('NaN') != -1) {
        numInput.innerHTML = 'Math Error'
    }
}

function keyPress() {
    button0.addEventListener('click', function () { addDisplay('0') })
    button1.addEventListener('click', function () { addDisplay('1') })
    button2.addEventListener('click', function () { addDisplay('2') })
    button3.addEventListener('click', function () { addDisplay('3') })
    button4.addEventListener('click', function () { addDisplay('4') })
    button5.addEventListener('click', function () { addDisplay('5') })
    button6.addEventListener('click', function () { addDisplay('6') })
    button7.addEventListener('click', function () { addDisplay('7') })
    button8.addEventListener('click', function () { addDisplay('8') })
    button9.addEventListener('click', function () { addDisplay('9') })
    btnAllClear.addEventListener('click', function () { clearAll() })
    btnRecentClear.addEventListener('click', function () { clearRecent() })
    buttonEqual.addEventListener('click', function () { equate() })
    decimal.addEventListener('click', function () { addDecimal() })

    buttonAdd.addEventListener('click', function () {
        numInput.innerHTML = ' + ';
        if (operation != 0) {
            equate()
            numInput.innerHTML = lastValue + ' + '
            input = lastValue;
        }
        if (lastValue == 0) {
            lastValue = input;
        }
        check()
        error()
        operation = 1;
        input = 0;
        numOutput = '';
        // reset()

    })
    buttonSub.addEventListener('click', function () {
        numInput.innerHTML = ' - ';
        if (operation != 0) {
            equate()
            numInput.innerHTML = lastValue + ' - '
            input = lastValue;
        }
        if (lastValue == 0) {
            lastValue = input;
        }
        check()
        error()
        operation = 2;
        input = 0;
        numOutput = '';
        // reset()
    })
    buttonMul.addEventListener('click', function () {
        numInput.innerHTML = ' * ';
        if (operation != 0) {
            equate()
            numInput.innerHTML = lastValue + ' * '
            input = lastValue;
        }
        if (lastValue == 0) {
            lastValue = input;
        }
        check()
        error()
        operation = 3;
        input = 0;
        numOutput = '';
        // reset()
    })
    buttonDiv.addEventListener('click', function () {
        numInput.innerHTML = ' / ';
        if (operation != 0) {
            equate()
            numInput.innerHTML = lastValue + ' / '
            input = lastValue;
        }
        if (lastValue == 0) {
            lastValue = input;
        }
        check()
        error()
        operation = 4;
        input = 0;
        numOutput = '';
        // oprArray.splice(oprArray.length, 0, '4');
        // reset()
    })
}
keyPress();
