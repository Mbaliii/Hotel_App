// import React, { useEffect, useState } from "react";
// import { Tabs } from 'antd';
// import { Tab, TabPane } from "react-bootstrap";
// import axios from "axios";
// import Loader from '../components/Loader';
// import Error from '../components/Error';

// const ProfileScreen = () => {

//     const user = JSON.parse(localStorage.getItem('currentUser'))
//     useEffect(() => {
//         if (!user) {
//             window.location.href = '/login'
//         }


//     }, [])
//     return (
//         <div className="ml-3 mt-3">
//             <Tabs defaultActiveKey="1" centered>
//                 <TabPane tab='Profile' key='1'>
//                     <h1>My Profile</h1>
//                     <br />
//                     <h1>Name : {user.name}</h1>
//                     <h1>Email : {user.email}</h1>
//                     <h1>isAdmin : {user.isAdmin ? 'YES' : 'No'} </h1>
//                 </TabPane>
//                 <TabPane tab='Bookings' key='2'>
//                     <MyBookings />
//                 </TabPane>
//             </Tabs>
//         </div>
//     )
// };

// export default ProfileScreen

// export function MyBookings() {

//     const user = JSON.parse(localStorage.getItem('currentUser'))
//     const [bookings, setbookings] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState();
//     useEffect(() => {
//         const getbookingsbyuserid = async () => {
//             try {
//                 setLoading(true)
//                 const data = await axios.post('http://localhost:5000/api/bookings/getbookingsbyuserid', { userid: user._id }).data
//                 // const rooms = await axios.post('http://localhost:5000/api/bookings/getbookingsbyuserid', { userid: user._id }).data
//                 console.log(data)
//                 setbookings(data)
//                 setLoading(false)
//             } catch (error) { 
//                 console.log(error);
//                 setLoading(false)
//                 setError(error)
//             }
//         }
//         getbookingsbyuserid()
//     }, [])
//     return (
//         <div>
//             <div className="row">
//                 <div className="col-md-6">
//                     {loading && (<Loader />)}
//                     {bookings && (bookings.map(booking => {
//                         return <div className="bs">
//                             <h1>{bookings.room}</h1>
//                             <h1>BookingId : {booking._id}</h1>
//                             <h1>CheckIn : {booking.fromdate}</h1>
//                             <h1>CheckOut : {booking.todate}</h1>
//                             <h1>Amount: {booking.totalamount}</h1>
//                             <h1>Status : {booking.status == 'booked' ? 'CONFIRMED' : 'CANCELLED'}</h1>
//                         </div>
//                     }))}
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from "react";
import { Tabs } from 'antd';
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';

const { TabPane } = Tabs;

const ProfileScreen = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }
    }, []);

    return (
        <div className="ml-3 mt-3">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab='Profile' key='1'>
                    <h1>My Profile</h1>
                    <br />
                    <h1>Name : {user.name}</h1>
                    <h1>Email : {user.email}</h1>
                    <h1>isAdmin : {user.isAdmin ? 'YES' : 'No'} </h1>
                </TabPane>
                <TabPane tab='Bookings' key='2'>
                    <MyBookings />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default ProfileScreen;

export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBookingsByUserId = async () => {
            try {
                setLoading(true);
                const response = await axios.post('http://localhost:5000/api/bookings/getbookingsbyuserid', { userid: user._id });
                const data = response.data;
                console.log(data);
                setBookings(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
                setError(error);
            }
        };

        getBookingsByUserId();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    {loading && (<Loader />)}
                    {bookings && (bookings.map(booking => {
                        return (
                            <div className="bs" key={booking._id}>
                                <h1>{booking.room}</h1>
                                <p><b>BookingId</b> : {booking._id}</p>
                                <p><b>CheckIn</b> : {booking.fromdate}</p>
                                <p><b>CheckOut</b> : {booking.todate}</p>
                                <p><b>Amount</b>: {booking.totalamount}</p>
                                <p><b>Status</b> : {booking.status === 'booked' ? 'CONFIRMED' : 'CANCELLED'}</p>
                            </div>
                        );
                    }))}
                </div>
            </div>
        </div>
    );
}




