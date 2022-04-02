import ACTIONS from "./actions";
import evaluate from "./evaluate";

// Here i define,
// what action does what
// with the help of a reducer
// i'm passing the current state
// and action's object, that contains
// action type and passed from users choosed values
export default function reducer(state, { type, payload }) {
  switch(type) {
    // what happens if the user clicks on the digit
    case ACTIONS.ADD_DIGIT:  
      // what to do, if user clicked evaluate button before
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      // if user clicked '0' and it is a zero on a display
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      // if there is a number with decimal on a display
      // and user clicks on the '.'
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      // in all other cases
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
    // what happens if the user clicks delete button
    case ACTIONS.DELETE_DIGIT: {
      // what to do, if user clicked evaluate button before
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null, // analog on the 'AC' button :)
        }
      }
      // if the zero on a display
      if (state.currentOperand == null) return state;
      // if the number on a display contains one digit
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null
        }
      }
      // in all other cases
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    }
    // what happens if the user clicks AC button
    case ACTIONS.CLEAR: 
      return {} // returning empty state
    // what happens if the user clicks operator +,-,/ or *
    case ACTIONS.CHOOSE_OPERATION: {
      // if nothing on a display
      if ( state.currentOperand == null 
          && state.previousOperand == null) {
            return state;  // the same as doing nothing
          }
      // here we just change the operator on a display
      if ( state.currentOperand == null) {
        return {
          ...state,
          operator: payload.operator,
        }
      }
      // here we swap operands and also add the operator on a display
      if ( state.previousOperand == null) {
        return {
          ...state,
          operator: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      // here we count the result and output it to the place 
      // of the previous operand with saving the operator
      return {
        ...state,
        previousOperand: evaluate(state),
        operator: payload.operator,
        currentOperand: null,
      }
    }
    // what happens if the user clicks evaluate button
    case ACTIONS.EVALUATE: {
      // In order to calculate, there must be all three components
      if ( state.operator == null ||
           state.currentOperand == null ||
           state.previousOperand == null ) {
             return state
           }
      // if there are all three components
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operator: null,
        currentOperand: evaluate(state)
      }
    }
    // according to the rules of redux :)
    default: {
      return state;
    }
  }
}