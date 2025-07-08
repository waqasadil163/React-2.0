import React, { useReducer } from 'react';

function UR() {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case '-':
                if (state > 0) {
                    return state - 1
                }
            case 'reset':
                return initialState
            case '+':
                return state + 1
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch('-')}>-</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('+')}>+</button>
        </div>
    );
}

export default UR;