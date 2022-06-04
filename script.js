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
  return a / b;
}

function operate(a, b, sign) {
  if (sign == "+") {
    return add(a, b);
  } else if (sign == "-") {
    return subtract(a, b);
  } else if (sign == "*") {
    return multiply(a, b);
  } else if (sign == "/") {
    return divide(a, b);
  }
}

//display btn listeners
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.value == "clear") {
      display.textContent = null;
    } else if (
      e.target.value == "=" &&
      display.textContent.indexOf("*") != -1
    ) {
      const array1 = display.textContent.split("*");
      display.textContent = operate(
        parseInt(array1[0]),
        parseInt(array1[1]),
        "*"
      );
    } else if (
      e.target.value == "=" &&
      display.textContent.indexOf("/") != -1
    ) {
      const array2 = display.textContent.split("/");
      display.textContent = operate(
        parseInt(array2[0]),
        parseInt(array2[1]),
        "/"
      );
    } else if (
      e.target.value == "=" &&
      display.textContent.indexOf("-") != -1
    ) {
      const array3 = display.textContent.split("-");
      display.textContent = operate(
        parseInt(array3[0]),
        parseInt(array3[1]),
        "-"
      );
    } else if (
      e.target.value == "=" &&
      display.textContent.indexOf("+") != -1
    ) {
      const array4 = display.textContent.split("+");
      display.textContent = operate(
        parseInt(array4[0]),
        parseInt(array4[1]),
        "+"
      );
    } else {
      display.textContent += " " + e.target.value;
    }
  })
);
