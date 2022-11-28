import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import './login.css';


const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  }); 

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value }); 
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 

    axios.post('http://localhost:5002/api/login', formData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }

  return (
    <div className='wrapper'>
        <div className='wrapper__form'>
          <form onSubmit={handleSubmit}>
            <h2>Login to enter panel</h2>
            <input type="text" placeholder='Username' name='username' onChange={(event) => handleChange(event)}/>
            <input type="password" placeholder='Password' name="password" onChange={(event) => handleChange(event)}/>
            <button type='submit'>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login