import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/logo2.png'
import useAuth from '../../../Hooks/useAuth';

import './Register.css'



const Register = () => {
    const {user, createUserWithEmailPassword} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    const handlePass2Change = (e) => {
        setRePassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === rePassword){
           return createUserWithEmailPassword(name, email, password, navigate)
        }else{
            return setError('Password does not match')
        }
        console.log(name, email, password);
        
    }

    return (
        <div className='LoginForm'>
        <div>
            <img width='150px' height='130px' src={logo} className='img-fluid' alt="" />
        </div>
        <div>
            <form onSubmit={handleSubmit}> 
                <div>
                    <input type="text" placeholder='Name' name='name' onBlur={handleNameChange} required /> 
                </div>
                <div>
                    <input type="email" placeholder='Email' name='email' onBlur={handleEmailChange} required /> 
                </div> 
                <div>
                    <input type="password" placeholder='Password' name='password' onBlur={handlePassChange} required /> 
                </div> 
                <div>
                    <input type="password" placeholder='Confirm Password' name='password2' onBlur={handlePass2Change} required /> 
                </div> 
                <p>{error}</p>
                <div>
                    <button type='submit' className='submitBtn'>Sign In</button>
                </div> 
                <div className='toggleAcc'>
                    <Link to='/login'>Already have an Account!</Link>
                </div>
            </form>
        </div>
        
    </div>
    );
};

export default Register;