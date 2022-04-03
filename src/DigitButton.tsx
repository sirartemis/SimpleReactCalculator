import ACTIONS from "./actions" // using as action types for reducer

// Actually the digit button React component
export default function DigitButton({
    // specify props
    dispatch, // send the reducer's dispatch function from calculator
    digit, // what is the digit? 1,2,3,4,5,6,7,8,9,.?
}) {
    // markup for React's render
    // with meaning, what to do when button clicked
    return <button 
        onClick={() => dispatch({ // the function, that send to reducer
            type: ACTIONS.ADD_DIGIT, // sending type of action
            payload: { digit },      // sending digit that will rendered
    })}>
        {digit} {/* this is for user */}
    </button>
}