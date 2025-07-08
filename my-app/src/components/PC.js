import React, { useCallback, useState } from 'react';
import Count from './Count';
import BT from './BT';

function PC() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(500000);
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 2500);
    }, [salary]);
    return (
        <div>
            <Count text="Age" count={age} />
            <BT handleClick={incrementAge}>Increment Age</BT>
            <Count text="Salary" count={salary} />
            <BT handleClick={incrementSalary}>Increment Salary</BT>
        </div>
    );
}

export default PC;