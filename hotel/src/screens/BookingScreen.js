import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

function BookingScreen() {
    const { roomid } = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                setLoading(true);
                const response = await axios.post("/api/rooms/getroombyid", { roomid });
                setRoom(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };

        fetchRoomData();

    }, [roomid]);

    return (
        <div className='m-5'>
            {loading ? (<h1><Loader /></h1>) : room ?
                (<div>
                    <div className='row mt-5 bs'>
                        <div className='col-md-5'>
                            <h1>{room.name}</h1>
                            <img src={room.imageurl[0]} className='bigimg' />
                        </div>
                    </div>
                    <div className='col-md-5  justify-content-center bs' style={{ float: 'right' }}>
                        <div>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name : </p>
                                <p>From Date : </p>
                                <p>To Date : </p>
                                <p>Max Count : {room.maxcount} </p>
                            </b>
                        </div>

                        <div >
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total Days : </p>
                                <p>Rent per night : {room.rentpernight}</p>
                                <p>Total amount: </p>
                            </b>
                        </div>

                        <div style={{ float: 'right' }}>
                            <button className="btn btn-outline-success">Pay Now</button>
                        </div>
                    </div>
                </div>) : (<Error />)}
        </div>
    );
}

export default BookingScreen;