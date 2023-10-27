import React, { useState } from "react";
import { GiButterflyFlower } from 'react-icons/gi';
import './contact.css';


const Contact = () => {

    const [data, setData] = useState({ name: "", email: "", message: "" })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(data)

    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <h1 className='blue-text'> <GiButterflyFlower className="icon" />Belmound Resort</h1>

            <h2>Contact<span> Us</span></h2>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} required placeholder="Enter Name" />
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} required placeholder="example@gmail.com" />
            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} required placeholder="+27 12 345 6789" />
            <textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder="type here..." />
            <button type="submit">Send</button>
        </form>
    );
};

export default Contact;
