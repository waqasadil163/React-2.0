import React, { useEffect } from 'react';

function UHooks(count) {
    useEffect(() => {
        document.title = `Count - ${count}`;
    }, [count]);
}

export default UHooks;