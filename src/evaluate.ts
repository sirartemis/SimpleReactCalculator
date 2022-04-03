import { State } from "./reducer";

/* This is the function, that
   calculate result of the operation
*/
export default function evaluate({
  currentOperand,
  previousOperand,
  operator,
}: State): string {
  const prev = parseFloat(previousOperand)   // number with decimal
  const current = parseFloat(currentOperand) // number with decimal
  
  // The condition, that inspect,
  // is it operation full, if user clicked evaluate button
  if (isNaN(prev) || isNaN(current)) return '';

  let computation: number; // default value of result of this function
                        // although it's all the same function returns empty string
  switch (operator) {
    case '+': {
      computation = prev + current
      break;
    }
    case '-': {
      computation = prev - current
      break;
    }
    case '/': {
      computation = prev / current
      break;
    }
    case '*': {
      computation = prev * current
      break;
    }
    default: {
      return '' // here why it's all the same ^ :)
    }
  }

  return computation.toString() // although it's all the same Javascript converts it to string :)
  // but i need accustom myself to strict typing
}