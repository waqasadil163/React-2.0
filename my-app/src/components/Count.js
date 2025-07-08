import React from 'react';
import PC from './PC';

function Count({ text, count }) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            <h2>{text} - {count}</h2>
        </div>
    )
}

export default Count