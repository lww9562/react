import { useState } from "react";

const Login = () => {
    const [userAccount, setUserAccount] = useState( {
        userId : '',
        userPw : ''
    });

    const handleChange = (e) => {
        userAccount[e.currentTarget.name] = e.currentTarget.value;
        setUserAccount({...userAccount});
    };

    const handleClick = () => {
        alert(`${userAccount.userId}, ${userAccount.userPw}`);
    };

    return (
        <div>
            아이디 : <input type='text' name='userId' value={userAccount.userId}
                onChange={handleChange}/> <br />
            비밀번호 : <input type='password' name='userPw' value={userAccount.userPw}
                onChange={handleChange}/> <br />

            <button type='submit' onClick={handleClick}>로그인</button>
        </div>
    );
};

export default Login;