import React, { useMemo, useState } from 'react';

function CU() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const incrementOne = () => {
        setCountOne(countOne + 1);
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 1);
    }
    const isEven = useMemo(() => {
        return (
            countOne % 2 === 0
        );
    }, [countOne]);
    return (
        <div>
            <button onClick={incrementOne}>Increment - 1 ({countOne}) <span>{isEven ? 'Even' : 'Odd'}</span></button>
            <button onClick={incrementTwo}>Increment - 2 ({countTwo})</button>
        </div>
    );
}

export default CU;