import axios from "axios";
import React, { useState } from "react";
import Loader from "../components/Loader";
import Error from '../components/Error';


function Register() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    async function login() {

        const user = {
            email,
            password,
        }
        try {
            setloading(true)
            const result = (await axios.post('http://localhost:5000/api/users/login', user)).data
            setloading(false)
            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href='/home'

        } catch (error) {
            console.log( error)
            setloading(false)
            seterror(true)
        }
    }


    return (
        <div>
            {loading && (<Loader/>)}
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    {error && (<Error message = "Invalid credentials"/>)}
                    <div classname="shadow-lg p-3 mb-5 bg-white rounded">
                        <h1> Login</h1>
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <button className="btn btn-outline-success shadow-lg p-3 mb-5 bg-white rounded" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register