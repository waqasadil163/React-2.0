import React, { useState } from 'react';
import UHooks from './UHooks';

function THooks() {
    const [count, setCount] = useState(0);
    UHooks(count);
    return (
        <div>
            Count - {count}<br /><br />
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    );
}

export default THooks;