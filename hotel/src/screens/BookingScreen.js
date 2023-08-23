import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import { useParams } from 'react-router-dom';

function BookingScreen() {
    const { roomid, fromdate, todate } = useParams();
    const fromdateFormatted = moment(fromdate, 'DD-MM-YYYY');
    const todateFormatted = moment(todate, 'DD-MM-YYYY');
    const totaldays = moment.duration(todateFormatted.diff(fromdateFormatted)).asDays() + 1;

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
            {loading ? (
                <h1><Loader /></h1>
            ) : room ? (
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
                                <p>Name : {room.name}</p>
                                <p>From Date : {fromdateFormatted.format('DD-MM-YYYY')}</p>
                                <p>To Date : {todateFormatted.format('DD-MM-YYYY')}</p>
                                <p>Max Count : {room.maxcount} </p>
                            </b>
                        </div>

                        <div>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total Days : {totaldays}</p>
                                <p>Rent per night : {room.rentpernight}</p>
                                <p>Total amount: {room.rentpernight * totaldays}</p>
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
