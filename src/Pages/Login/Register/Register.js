import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import image from "./no1.png";


const Register = () => {
    const { signInUsingGoogle, handleEmailChange, handleNameChange, handlePasswordChange, handleRegistrationThroughEmail, error } = useAuth();
    return (
        <div>
            <div className="login-form mb-5">
                <img src={image} alt="" />
                <form onSubmit={handleRegistrationThroughEmail}>
                    <h1>Register</h1>
                    <div>

                        <input onBlur={handleNameChange} className="input-box" type="text" defaultValue="test" placeholder="write your name" />
                        <input onBlur={handleEmailChange} className="input-box" type="email" defaultValue="test" placeholder="write your email" />

                        <input onBlur={handlePasswordChange} className="input-box" placeholder="write your password" type="password" required />

                        <span className="error"><small>{error}</small></span>
                        {/* <input type="submit" />*/}
                        <button type="submit" className="signup-btn">
                            Register
                        </button>

                        <hr />
                        <p className="or">OR</p>

                        <button onClick={signInUsingGoogle} type="button" className="signup-btn">Sign in with google</button>

                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Register;