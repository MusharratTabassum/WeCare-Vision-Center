import React from 'react';
import { useForm } from 'react-hook-form';
import image from './contact.png'
import "./Form.css"

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='all-content img-fluid mt-5 p-3'>
            <div className="d-flex row" >
                <div className="col-lg-5">
                    <img src={image} alt="" className="img-section img-fluid" />
                </div>
                <div className="col-lg-7 mt-4">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex">
                            <input className='m-2' placeholder="first name" defaultValue="" />
                            <input className='m-2' placeholder="last name" defaultValue="" {...register("l_name")} />
                        </div>
                        <div className="d-flex">
                            <input className='m-2' placeholder="phone number" defaultValue="" {...register("p_number")} />
                            <input className='m-2' placeholder="email" {...register("email", { required: true })} />
                        </div>
                        <div>
                            <textarea className='m-2' placeholder="messages"  {...register("message")} />
                            {errors.email && <span className="error">Email field is required</span>}
                        </div>

                        <input className='mt-3' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;