import React, { useContext } from 'react';
import { CountContext } from '../App';

function A() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick={() => countContext.countDispatch('-')}>-</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('+')}>+</button>
        </div>
    );
}

export default A;