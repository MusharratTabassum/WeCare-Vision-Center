import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import image from "./image/no1.png";
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="login-form">
                <img src={image} alt="" />
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input-box" type="email" defaultValue="test" placeholder="write your email" {...register("emailRequired", { required: true })} />
                    {errors.emailRequired && <span className="error">please write your email</span>}
                    <input className="input-box" placeholder="write your password" type="password" {...register("passwordRequired", { required: true })} />
                    {errors.passwordRequired && <span className="error">This field is required</span>}
                    {/* <input type="submit" />*/}
                    <button type="submit" className="signup-btn">Sign up</button>
                    <hr />
                    <p className="or">OR</p>
                    <button onClick={signInUsingGoogle} type="button" className="signup-btn">Sign in with google</button>
                    <p>Do you have an account? <a href="#">Sign in</a></p>

                </form>
            </div>

        </div>
    );
};

export default Login;