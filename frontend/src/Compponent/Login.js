import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    },[])




    const handleLogin = async () => {
        
        if ( !email|| !password ) {
            setError(true);
            return false
                                                }
        console.log(email, password)
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
      //  console.log(result);
        
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/");
        } else {
            alert("Please enter right details")
        }
    }


    return (
        <div className="login"><h1>Login</h1>
            <input typeof="text" placeholder="entaer email" className="inputBox"
                onChange={(e) => setEmail(e.target.value)} value={email} />
                {error && !email && <span className='invalid-input'>Enter email</span>}
            <input type='password' placeholder="enter password" className="inputBox"
                onChange={(e) => setPassword(e.target.value)} value={password} />
                {error && !password && <span className='invalid-input'>Enter  password</span>}
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    )

}

export default Login





//////////video 15/////s
