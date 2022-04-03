import React,{ useReducer } from 'react';
/************************************/
// Components
/* Have a markup of the repeating
elements and declares calling reducer actions,
reacting to events
 */

import DigitButton from './DigitButton'; // 1,2,3,4,5,6,7,8,9 and .(delimeter)
import OperationButton from './operationButton'; // *,/,+,-

// styles
import './styles.css';

// reducer for calculator
import ACTIONS from './actions'; // action types
import reducer from './reducer'; // switching actions by events

// functions
import formatOperand from './formatOperand'; // dividing thousands

// Actually, the calculator
const App: React.FC = () => {
  // declare the reducer for calculator
  // and adding state parameters
  // In this i don't declare the 'overwrite' parameter
  // because it using as condition for the overwrite previous results
  // and don't need in the initial state
  const [{
    currentOperand = '0', // begining value of the calculator
    previousOperand, // above the current operand
    operator // after the previous operand
  }, dispatch] = useReducer(reducer, {}); // initial state is empty

  return (
   <div className="calculator-grid">  {/* the main container*/}
    <div className="output"> {/* calculators display */}
      <div className="previous-operand">
        {formatOperand(previousOperand)} {operator} {/* the top part */}
      </div>
      <div className="current-operand">
        {formatOperand(currentOperand)}             {/* the bottom part */}
      </div>
    </div>                   {/* the end of the display */}
      {/************************************/}
      {/* reset button */}
      <button 
        className="span-two"  
        onClick={ () => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      {/* reset button's end */}
      {/************************************/}
      {/* delete button */}
      <button
        onClick={() => dispatch({
          type: ACTIONS.DELETE_DIGIT
        })}
        >
          DEL
      </button>
      {/* delete button's end */}
      {/************************************/}
      {/* here i pasting repeating components
          and writing props,
          for operators - operator prop,
          for digit - digit,
      and dispatch function as dispatch prop */}
      <OperationButton operator='/' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operator='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operator='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operator='-' dispatch={dispatch} />
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      {/* evaluate button */}
      <button 
        className="span-two"
        onClick={ () => dispatch({
          type: ACTIONS.EVALUATE
        })}>
          =
        </button>
      {/* the end of the evaluate button */}
   </div> // the end of the main container "calculator-grid" 
  );
}

export default App;