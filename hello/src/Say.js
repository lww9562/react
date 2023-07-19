import {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');

    const enterClick = () => setMessage("안녕하세요!");
    const leaveClick = () => setMessage("안녕히 가세요!");

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={enterClick}>입장</button>
            <button onClick={leaveClick}>퇴장</button>
        </div>
    );
}

export default Say;