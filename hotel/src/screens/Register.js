import React, { useState } from "react";
import axios from 'axios';
import Loader from "../components/Loader";
import Error from '../components/Error';
import Success from "../components/Success";


function Register() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsucces] = useState();

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }
            try {
                setloading(true)
                const result = await axios.post('/api/users/register', user).data
                setloading(false)
                localStorage.setItem('currentUser', JSON.stringify(result));
                window.location.href = '/login'
                setsucces(true)

                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(true)
            }
        }
        else {
            alert('Password does not match')
        }
    }


    return (
        <div>
            {loading && (<Loader />)}
            {error && (<Error />)}

            <div className="row justify-content-center mt-5">


                <div className="col-md-5">
                    {success && (<Success message={'Registration success'} />)}

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