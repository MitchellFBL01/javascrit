let display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        //Replace × with * and ÷ with / for evaluation
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard handling
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault();
        if (key === '=' || key === 'Enter') {
            calculate();
        } else if (key === '*') {
            appendToDisplay('×');
        } else if (key === '/') {
            appendToDisplay('÷');
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        event.preventDefault();
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    }
});