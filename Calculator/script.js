// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === null) return; // Skip buttons without data-value (e.g., clear or equals)

    if (resetNext) {
      currentInput = "";
      resetNext = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});

// Clear Button
document.getElementById("clear").addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});

// Equals Button
document.getElementById("equals").addEventListener("click", () => {
  try {
    // Evaluate only if input is valid
    const result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
    resetNext = true;
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
    resetNext = true;
  }
});
