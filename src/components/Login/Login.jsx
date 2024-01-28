import React, { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import './Login.css'
import { TextField } from '@mui/material';
import axios from 'axios';  // Import axios for making API requests
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../Api';

const Login = () => {
  const [Username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('');
     const defaultTheme = createTheme();
     const navigate=useNavigate()
     const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('baseUrl + /petstore/login', {
          Username: Email,
          password: password,
        });
  
        if (response.data.success) {
          alert('Login successful');
          console.log(response.data);
          navigate('/home');
        } else {
          setError('Invalid Email or Password. Please try again.');
          console.log(response.data);

        }
      } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
    };

  return (
    <div>
      <div className="topnav">
        <PetsIcon />
        <a href="login.html" >PETHUB</a>
      </div>

      <div className='login-bg'></div>

      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            
            <TextField 
              id='outlined' 
              label='Username' 
              variant='outlined'  
              value={inputs.username} 
              onChange={handleUsernameChange} 
              required 
            /><br></br>
            
            <br></br><TextField  
              type='password' 
              id='outlined-password'  
              label='Password' 
              variant='outlined'  
              value={inputs.password} 
              onChange={handlePasswordChange} 
              required
            />
            <br></br>

            <div className='button'><br></br>
              <button type="submit" onClick={handleSubmit}> LOGIN</button>
            </div>

            {error && <p>All fields must be entered</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
