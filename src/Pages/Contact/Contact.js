import React from 'react';
import { useForm } from 'react-hook-form';
import "./Contact.css";
import image from "./contact.jpg"

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div >
            <div className="img-fluid" style={{ background: `radial-gradient(transparent, black), url('https://templates.hibootstrap.com/opnix/rtl/assets/images/title/4.jpg`, backgroundSize: 'cover', height: "350px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background: "rgba(255, 255, 255, 0.616)", height: "100%" }} className="text-center d-flex justify-content-center align-items-center">
                    <div className="w-50 px-4 py-3 "><h2 className="title-style">Contact</h2></div>
                </div>
            </div>
            <div className="">
                <div className="d-flex row" >
                    <div className="col-lg-5">
                        <img src={image} alt="" className="img-item img-fluid" />
                    </div>
                    <div className="col-lg-7">
                        <h1>Contact Us</h1>
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex">
                                <input placeholder="first name" defaultValue="" />
                                <input placeholder="last name" defaultValue="" {...register("l_name")} />
                            </div>
                            <div className="d-flex">
                                <input placeholder="phone number" defaultValue="" {...register("name")} />
                                <input placeholder="email" {...register("email", { required: true })} />
                            </div>
                            <textarea placeholder="messages" defaultValue="name" {...register("name")} />
                            {errors.email && <span className="error">Email field is required</span>}
                            <input type="submit" />
                        </form>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Contact;