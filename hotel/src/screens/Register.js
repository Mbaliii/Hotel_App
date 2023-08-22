import React, { useState } from "react";


function Register() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            console.log(user);
        }
        else {
            alert('Password does not match')
        }
    }


    return (
        <div>
            <div className="row justify-content-center mt-5">


                <div className="col-md-5">
                    <div classname="shadow-lg p-3 mb-5 bg-white rounded">
                        <h1>Register</h1>
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="confirm password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className="btn btn-outline-success shadow-lg p-3 mb-5 bg-white rounded" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register