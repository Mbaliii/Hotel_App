import { Tabs } from "antd";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "../components/Loader";

const { TabPane } = Tabs;



// admin panel
function AdminScreen() {
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('currentUser')).isAdmin) {
            window.location.href = '/home'
        };
    }, [])
    return (
        <div className="mt-3 ml-3 mr-3 bs">
            <h1 className="text-center"><b>Admin Panel</b></h1>
            <Tabs centered defaultActiveKey="1" >
                <TabPane tab='Bookings' key='1'>
                    <Bookings />
                </TabPane>
                <TabPane tab='Rooms' key='2'>
                    <Rooms />
                </TabPane>
                <TabPane tab='Add Room' key='3'>
                    <Addroom />
                </TabPane>
                <TabPane tab='Users' key='4'>
                    <Users />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default AdminScreen;


// bookings list
export function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/bookings/getallbookings");
                setBookings(response.data);
                setloading(false)
            } catch (error) {
                console.error(error);
                setloading(false);
                seterror(error)
            }
        };

        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col-md-10">
                <h1>Bookings Screen</h1>
                {loading && (<Loader />)}
                <table className="table table-borded table-dark">
                    <thead className="bs">
                        <tr>
                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map(booking => {
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td>{booking.room}</td>
                                <td>{booking.fromdate}</td>
                                <td>{booking.todate}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



// rooms screen component

export function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/rooms/getallrooms");
                setRooms(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
                setError(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Rooms</h1>
                {loading ? (<Loader />) : (
                    <table className="table table-bordered table-dark">
                        <thead className="bs">
                            <tr>
                                <th>Room ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Rent Per Night</th>
                                <th>Max Count</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map(room => (
                                <tr key={room._id}>
                                    <td>{room._id}</td>
                                    <td>{room.name}</td>
                                    <td>{room.type}</td>
                                    <td>{room.rentpernight}</td>
                                    <td>{room.maxcount}</td>
                                    <td>{room.phonenumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}


// users list component
export function Users() {
    const [users, setusers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/users/getallusers");
                setusers(response.data);
                setloading(false);
            } catch (error) {
                console.error(error);
                setloading(false);
                seterror(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Users</h1>
                {loading && <Loader />}
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && (users.map(users => {
                            return <tr>
                                <td>{users._id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.isAdmin ? 'YES' : 'NO'}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


// add room component
export function Addroom() {

    const [name, setname] = useState('');
    const [rentpernight, setrentpernight] = useState();
    const [maxcount, setmaxcount] = useState();
    const [description, setdescriptions] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [imageurl1, setimageurl1] = useState();
    const [imageurl2, setimageurl2] = useState();
    const [imageurl3, setimageurl3] = useState();
    const [type, settype] = useState();

    async function addroom() {
        const newroom = {
            name,
            rentpernight,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls: [imageurl1, imageurl2, imageurl3]
        }
        try {

            const result = (await axios.post('http://localhost:5000/api/rooms/addroom', newroom)).data
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="row">
            <div className="col-md-5">
                <input type='text' className="form-control" placeholder="room name"
                    value={name} onChange={(e) => { setname(e.target.value) }} />

                <input type='text' className="form-control" placeholder="rent per night"
                    value={rentpernight} onChange={(e) => { setrentpernight(e.target.value) }} />

                <input type='text' className="form-control" placeholder="max count"
                    value={maxcount} onChange={(e) => { setmaxcount(e.target.value) }} />

                <input type='text' className="form-control" placeholder="description"
                    value={description} onChange={(e) => { setdescriptions(e.target.value) }} />

                <input type='text' className="form-control" placeholder="phone number"
                    value={phonenumber} onChange={(e) => { setphonenumber(e.target.value) }} />
            </div>

            <div className="col-md-5">
                <input type='text' className="form-control" placeholder="type"
                    value={type} onChange={(e) => { settype(e.target.value) }} />

                <input type='text' className="form-control" placeholder="Image URL 1"
                    value={imageurl1} onChange={(e) => { setimageurl1(e.target.value) }} />

                <input type='text' className="form-control" placeholder="Image URL 2"
                    value={imageurl2} onChange={(e) => { setimageurl2(e.target.value) }} />

                <input type='text' className="form-control" placeholder="Image URL 3"
                    value={imageurl3} onChange={(e) => { setimageurl3(e.target.value) }} />
                <div className="text-right">
                    <button className="btn btn-secondary" onClick={addroom}>Add Room</button>
                </div>
            </div>
        </div>
    )
}