let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}
