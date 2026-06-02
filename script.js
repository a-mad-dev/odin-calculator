const app = document.getElementById("app");
const calculator = document.querySelector(".calculator");

const display = document.querySelector(".display");
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op");
const eqBtn = document.querySelector(".eq");
const clsBtn = document.querySelector(".cls");

// Variables
let firstNumber;
let secondNumber;
let operator;
let shouldResetDisplay = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  } else {
    return a / b;
  }
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (shouldResetDisplay) {
      operator = btn.textContent;
      return;
    }
    if (operator && !shouldResetDisplay) {
      secondNumber = Number(display.value);
      const result = operate(operator, firstNumber, secondNumber);
      result = Math.round(result * 1000000) / 1000000;
      if (typeof result === "string") {
        display.value = result;
        firstNumber = undefined;
        operator = undefined;
        shouldResetDisplay = true;
        return;
      } else {
        display.value = result;
        firstNumber = result;
      }
    } else {
      firstNumber = Number(display.value);
    }
    operator = btn.textContent;
    shouldResetDisplay = true;
  });
});

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (shouldResetDisplay) {
      display.value = "";
      shouldResetDisplay = false;
    }
    if (display.value === "0") {
      display.value = btn.textContent;
    } else {
      display.value += btn.textContent;
    }
  });
});

eqBtn.addEventListener("click", () => {
  secondNumber = Number(display.value);
  if (!operator || firstNumber === undefined) return;
  display.value = operate(operator, firstNumber, secondNumber);
  operator = "";
  shouldResetDisplay = true;
});

clsBtn.addEventListener("click", () => {
  display.value = "0";
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  shouldResetDisplay = false;
});
