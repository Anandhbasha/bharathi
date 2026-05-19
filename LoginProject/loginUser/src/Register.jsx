import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const registerUser = async() => {
        try{
            await axios.post('api', {
                email,
                password
            });
            alert("Resgistered successfully");
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Error registering user");
        }
    }
  return (
    <div className='Register'>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}    />
        <br />  
        <button onClick={registerUser}>Register</button>
    </div>
  )
}

export default Register