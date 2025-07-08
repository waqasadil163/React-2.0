import React from 'react';

function BT({ handleClick, children }) {
    console.log('Rendering Button');
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    );
}

export default BT;