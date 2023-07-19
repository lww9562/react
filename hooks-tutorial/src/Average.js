import { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
    const total = numbers.reduce((a,b) => Number(a)+Number(b), 0);

    return total > 0 ? total / numbers.length : 0;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const changeHandler = useCallback((e) => setNumber(e.currentTarget.value), []);
    const clickHandler = useCallback(() => {
        //list.push(number);
        
        setList(list.concat(number));
        setNumber('');
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    const items = list.map((number, i) => <li key={i}>{number}</li>)
    return (
        <div>
            <input type="number" value={number} onChange={changeHandler}/>
            <button type="button" onClick={clickHandler}>등록</button>
            <ul>
                {items}
            </ul>
            <div>평균 : {avg} </div>
        </div>
    );
};

export default Average;