import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from "./image/no1.png";
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle, handleRegistrationThroughEmail, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin } = useAuth();

    return (
        <div>
            <div className="login-form">
                <img src={image} alt="" />

                <form onSubmit={handleRegistrationThroughEmail}>
                    <h1>{isLogin ? 'Login' : 'Register'}</h1>
                    {!isLogin && <div>

                        <input onBlur={handleEmailChange} className="input-box" type="email" defaultValue="test" placeholder="write your email" />

                        <input onBlur={handlePasswordChange} className="input-box" placeholder="write your password" type="password" required />

                        <span className="error"><small>{error}</small></span>
                        {/* <input type="submit" />*/}

                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                <p>Already Registered?</p>
                            </label>
                        </div>

                        <button type="submit" className="signup-btn">
                            {isLogin ? 'Login' : 'Register'}
                        </button>

                        <hr />
                        <p className="or">OR</p>

                        <button onClick={signInUsingGoogle} type="button" className="signup-btn">Sign in with google</button>

                        <p>Do you have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;