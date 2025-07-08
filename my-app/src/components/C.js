import React, { useContext } from 'react';
import { CountContext } from '../App';

function C() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <br />Component C<br /><br />
            <button onClick={() => countContext.countDispatch('-')}>-</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('+')}>+</button>
        </div>
    );
}

export default C;