import React, { useEffect, useState } from 'react';

function OHooks() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count - ${count}`;
    }, [count]);
    return (
        <div>
            Count - {count}<br /><br />
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    );
}

export default OHooks;