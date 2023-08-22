import axios from "axios";
import React, { useState } from "react";


function Register() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    async function login() {

        const user = {
            email,
            password,
        }
        try {
            const result = await axios.post('/api/users/login', user).data
        } catch (error) {
            console.log(error)
        }
        console.log(user)
    }


    return (
        <div>
            <div className="row justify-content-center mt-5">


                <div className="col-md-5">
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