import { Tabs } from "antd";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "../components/Loader";

const { TabPane } = Tabs;

function AdminScreen() {
    return (
        <div className="mt-3 ml-3 mr-3 bs">
            <h1 className="text-center"><b>Admin Panel</b></h1>
            <Tabs centered defaultActiveKey="1" >
                <TabPane tab='Bookings' key='1'>
                    <Bookings />
                </TabPane>
                <TabPane tab='Rooms' key='2'>
                    <h1>Rooms</h1>
                </TabPane>
                <TabPane tab='Add Room' key='3'>
                    <h1>Add Room</h1>
                </TabPane>
                <TabPane tab='Users' key='4'>
                    <h1>Users</h1>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default AdminScreen;

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
                        <tbody>
                            {bookings.length &&  (bookings.map(booking => {
                                return <tr>
                                    <td>{booking._id}</td>
                                    <td>{booking.userid}</td>
                                    <td>{booking.room}</td>
                                </tr>
                            }))}
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>
    )
}
