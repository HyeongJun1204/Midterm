import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const NotLogin = (props) => {
    const {changeId,changeNames} = props; 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const correctPassword = "0000";
    const navigate = useNavigate(); 
    const [wrongPassword, setWrongPassword] = useState(false);

    const checkPwd = () => {
        if (password === correctPassword) {
            alert('로그인 성공!');
            changeId(true);
            navigate('/'); 
            changeNames(name); 
        } else {
            setPassword(''); // 비밀번호 초기화
            setWrongPassword(true);
        }
    };

    return (
        <div class="login-wrapper">
            <h1>Login 화면</h1>
            <input
                type="text"
                name="id"
                value={name}
                placeholder="이름을 입력하세요"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="password"
                name="pwd"
                placeholder="암호를 입력하세요.(암호: 0000)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={checkPwd}>Login</button>
            {wrongPassword && <span id="wrongpwd">비밀번호가 틀렸습니다. 다시 입력하세요.</span>}
        </div>
    );
};

export default NotLogin;
