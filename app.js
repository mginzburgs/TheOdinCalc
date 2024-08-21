let prevValue = "";
let nextValue = "";
let res = "";
let calcMethod = "";

const METHODS = {
  divide: "divide",
  multiply: "multiply",
  plus: "plus",
  minus: "minus",
};

// CALC ELEMENTS
const display = document.querySelector(".calc__input");
const buttons = document.querySelector(".calc__buttons");
const numbers = document.querySelector(".numbers");
const sideNav = document.querySelector(".buttons__side-nav");
// CALC BUTTONS
const clear = document.querySelector(".buttons__C");
const equals = document.querySelector(".buttons__equal");
const change = document.querySelector(".buttons__sign");
const percent = document.querySelector(".buttons__percent");

// MATH
function divide(a, b) {
  return Number(a) / Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function plus(a, b) {
  return Number(a) + Number(b);
}

function minus(a, b) {
  return Number(a) - Number(b);
}

// LISTENER FUNCTIONS
function showInputOnDisplay(e) {
  if (e.target.tagName === "BUTTON") {
    let element = e.target;
    display.value += element.innerText;
  }
  return;
}

function resetInputValue() {
  display.value = "";
  prevValue = "";
  nextValue = "";
  res = "";
  calcMethod = "";
}

function changeSign() {
  if (!display.value[0]) {
    return;
  } else if (display.value[0] == "-") {
    console.log(display.value[0]);
    display.value = Math.abs(display.value);
  } else if (display.value[0] == "+") {
    display.value[0] = "-";
  } else {
    display.value = "-" + display.value;
  }
}

function calculatePercent() {
  display.value = display.value / 100;
}

function saveAndReset() {
  prevValue = display.value;
  display.value = "";
}

function getResult() {
  nextValue = display.value;
  if (!calcMethod) {
    return;
  } else if (calcMethod == METHODS.minus) {
    return minus(prevValue, nextValue);
  } else if (calcMethod === METHODS.plus) {
    return plus(prevValue, nextValue);
  } else if (calcMethod === METHODS.divide) {
    return divide(prevValue, nextValue);
  } else if (calcMethod === METHODS.multiply) {
    return multiply(prevValue, nextValue);
  }
}

function nextOperation(e) {
  switch (e.target.value) {
    case "equals":
      break;
    case "divide":
      calcMethod = METHODS.divide;
      break;
    case "times":
      calcMethod = METHODS.multiply;
      break;
    case "minus":
      calcMethod = METHODS.minus;
      break;
    case "plus":
      calcMethod = METHODS.plus;
      break;
  }
}

//EVENT LISTENERS
numbers.addEventListener("click", (e) => showInputOnDisplay(e));
clear.addEventListener("click", () => resetInputValue());
change.addEventListener("click", () => changeSign());
percent.addEventListener("click", () => calculatePercent());

sideNav.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.value === "equals") {
      return (display.value = getResult());
    } else {
      saveAndReset();
      nextOperation(e);
    }
  }
});

// sideNav.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     if (e.target.value === "equals") {
//       res = getResult();

//       prevValue = res;
//       nextValue = "";
//       return (display.value = res);
//     } else {
//       saveAndReset();
//       if (prevValue && nextValue) {
//         res = getResult();

//         prevValue = res;
//         nextValue = "";
//         return (display.value = res);
//       } else if (prevValue && !nextValue) {
//         return;
//       }
//     }
//   }
// });
