import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Api } from './App';
import axios from 'axios';

const Login = () => {
    const api = Api
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const loginUser = async() => {
        try{
            await axios.post(api, {
                email,
                password
              });
            alert("Logged in successfully");
            navigate("/home")
        } catch (error) {
            console.error("Error logging in user:", error);
            alert("Error logging in user");
        }
    }
  return (
    <div className='Login'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}    />
        <br />
        <button onClick={loginUser}>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login