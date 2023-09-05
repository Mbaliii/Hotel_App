import React, { useEffect } from "react";
import { Tabs } from 'antd';
import { Tab, TabPane } from "react-bootstrap";
import axios from "axios";

const ProfileScreen = () => {

    const user = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }


    }, [])
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
    )
};

export default ProfileScreen

export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(async () => {
        const rooms = await (await axios.post('api/getbookingsbyuserid', { userid: user._id })).data
        console.log(rooms)

    }, [])
    return (
        <div>
            <h1>My Bookings</h1>
        </div>
    )
}
