import ACTIONS from "./actions"; // we need actions )))

// Same as DigitButton
// except that instead of a digit, the operator
export default function OperationButton({
    dispatch,
    operator
}) {
    return (
        <button onClick={() => dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operator },
        })}>
            {operator}
        </button>
    )
}