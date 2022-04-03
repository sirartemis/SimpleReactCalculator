import React from "react";
import ACTIONS from "./actions"; // we need actions )))
import { Action } from './reducer';

interface OperationParams {
    dispatch: React.Dispatch<Action>;
    operator: string;
}
// Same as DigitButton
// except that instead of a digit, the operator
export default function OperationButton({
    dispatch,
    operator
}: OperationParams) {
    return (
        <button onClick={() => dispatch({
            type: ACTIONS.CHOOSE_OPERATION,
            payload: { operator },
        })}>
            {operator}
        </button>
    )
}