// Get the input display element
const display = document.querySelector("input");

// Get all buttons
const buttons = document.querySelectorAll("button");

// Variable to store current expression
let expression = "";

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        // Evaluate the expression
        expression = eval(expression);
      } catch (error) {
        expression = "Error";
      }
      display.value = expression;
    } else if (value === "C") {
      // Clear everything
      expression = "";
      display.value = "";
    } else {
      // Append the value to expression
      expression += value;
      display.value = expression;
    }
  });
});