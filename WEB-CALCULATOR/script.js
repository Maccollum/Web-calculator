const display = document.getElementById('display');

// Append numbers to the display
function appendNumber(number) {
  if (display.value === "0" && number !== ".") {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Append operators (+, -, *, /, %)
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    // Replace the last operator if user inputs another
    display.value = display.value.slice(0, -1) + operator;
  } else if (display.value !== "") {
    display.value += operator;
  }
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
  try {
    // Evaluate the expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Listen for keyboard input
document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key)) {
    // Numbers 0-9
    appendNumber(e.key);
  } else if ("+-*/.%".includes(e.key)) {
    appendOperator(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

function flashError() {
  display.style.background = "#ff4d4d";
  setTimeout(() => {
    display.style.background = "#111";
  }, 200);
}

// Update calculate function
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    flashError();
  }
}