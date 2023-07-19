import { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(number + 1);
    }

    const minus = () => {
        setNumber(number - 1);
    }
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
        </div>
    );
};

export default Counter;