import React, { useState } from "react";
import axios from 'axios';
import Loader from "../components/Loader";
import Error from '../components/Error';
import Success from "../components/Success";
import { Link } from "react-router-dom";




function AdminRegister() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            };
            try {
                setloading(true);
                const result = await axios.post('http://localhost:5000/api/users/adminregister', user).data;
                setloading(false);
                setsuccess(true);

                setname('');
                setemail('');
                setpassword('');
                setcpassword('');
            } catch (error) {
                console.log(error);
                setloading(false);
                seterror(true);
            }
        } else {
            alert('Password does not match');
        }
    }

    return (
        <div className='back' style={{}}>
            {loading && (<Loader />)}
            {error && (<Error />)}

            <div className="row justify-content-center mt-5">
                <div>
                    {success && (<Success message={'Registration success'} />)}
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <h1>Admin Register</h1>
                        <input type="text" className="form-control shadow-lg p-6 mb-5 bg-white rounded" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="password" className="form-control shadow-lg p-3 mb-5 bg-white rounded" placeholder="confirm password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className="btn btn-outline" onClick={register}>Register</button>
                        {success && (
                            <p className=" btn tb-video">
                                Already registered? <Link to="/adminlogin">Login</Link>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;
