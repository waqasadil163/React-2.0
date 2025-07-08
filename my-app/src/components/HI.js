import React, { useEffect, useRef, useState } from 'react';

function HI() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);
    return (
        <div>
            Hook Time - {time}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    );
}

export default HI;