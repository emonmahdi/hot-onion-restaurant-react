import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/logo2.png';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {user, setUser, setError, signInUsingGoogle, signInUsingFacebook, setIsLoading, signInUserEmailAndPass} = useAuth(); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
 
    const redirect_url = location?.state?.from || '/';  

    // Google Login
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        signInUsingGoogle()
            .then((result) => { 
                setUser(result.user);
                navigate(redirect_url);
                
            }).catch((err) => {
                setError(err.message)
            }).finally(() => setIsLoading(false))
    }
    // Facebook Login
    const handleFacebookSignIn = () => {
        setIsLoading(true)
        signInUsingFacebook()
            .then((result) => { 
                setUser(user)
                navigate(redirect_url);
            }).catch((err) => {
                setError(err.message)
            }).finally(() => setIsLoading(false))
    }


    // Handle Email Change
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    // Handle Email Change
    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        signInUserEmailAndPass(email, password);
        navigate('/')
    }

    return (
        <div className='LoginForm'>
            <div>
                <img width='150px' height='130px' src={logo} className='img-fluid' alt="" />
            </div>
            <div>
               <h5> {user?.name && <span>{user?.displayName}</span>}</h5>
            </div>
            <div>
                <form onSubmit={handleSubmit}> 
                    <div>
                        <input type="email" placeholder='Email' name='email' onBlur={handleEmailChange} /> 
                    </div>
                    <div>
                        <input type="password" placeholder='Password' name='password' onBlur={handlePassChange} /> 
                    </div> 
                    <div>
                        <button type='submit' className='submitBtn'>Sign In</button>
                    </div>
                    <div>
                        <h6 className='my-3'>--------OR--------</h6>
                    </div>
                    <div className='loginBtns'>
                        <button onClick={handleGoogleSignIn} type='submit' className='loginBtn btn btn-info'><i className='fa fa-google me-3'></i> Google</button> 
                    </div>
                    <div className='loginBtns'>
                        <button onClick={handleFacebookSignIn} type='submit' className='loginBtn btn btn-primary'><i className='fa fa-facebook me-3'></i>Facebook</button> 
                    </div>
                    <div className='loginBtns'>
                         <button type='submit' className='loginBtn btn btn-dark'><i className='fa fa-github me-3'></i>Github</button> 
                    </div>
                    <div className='toggleAcc'>
                    <Link to='/register'>Create new Account!</Link>
                </div>
                </form>
            </div>
            
        </div>
    );
};

export default Login;