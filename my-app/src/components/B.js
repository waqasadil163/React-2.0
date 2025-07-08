import React, { useContext } from 'react';
import { CountContext } from '../App';

function B() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <br />Component B<br /><br />
            <button onClick={() => countContext.countDispatch('-')}>-</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('+')}>+</button>
        </div>
    );
}

export default B;