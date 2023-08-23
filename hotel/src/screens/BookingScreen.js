import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';

function BookingScreen() {
    const { roomid, fromdate, todate } = useParams();

    const totalDays = moment(todate).diff(moment(fromdate), 'days'); 

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
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
            {loading ? (<h1><Loader /></h1>) : room ? (
                <div>
                    <div className='row mt-5 bs'>
                        <div className='col-md-5'>
                            <h1>{room.name}</h1>
                            <img src={room.imageurl[0]} className='bigimg' alt="Room" />
                        </div>
                    </div>
                    <div className='col-md-5  justify-content-center bs' style={{ float: 'right' }}>
                        <div>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name : </p>
                                <p>From Date : {fromdate}</p>
                                <p>To Date : {todate}</p>
                                <p>Max Count : {room.maxcount} </p>
                            </b>
                        </div>

                        <div>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total Days : {totalDays}</p>
                                <p>Rent per night : {room.rentpernight}</p>
                                <p>Total amount: {room.rentpernight * totalDays}</p>
                            </b>
                        </div>

                        <div style={{ float: 'right' }}>
                            <button className="btn btn-outline-success">Pay Now</button>
                        </div>
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </div>
    );
}

export default BookingScreen;
