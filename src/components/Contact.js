import React from 'react';
import { useForm } from 'react-hook-form'

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert("Thank you for your message!");
    }
    return (
        <section>
            <h2>Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}
            <input type="email" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
            <textarea placeholder="Message" {...register("message", { required: true })}></textarea>
            {errors.message && <span>This field is required</span>}
            <button type="submit">Submit</button>
        </form>
        </section>
    );
}

export default Contact;