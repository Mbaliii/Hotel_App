import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [fromdate, setFromDate] = useState(); 
    const [todate, setToDate] = useState(); 

    useEffect(() => {
        async function fetchRooms() {
            try {
                setLoading(true);
                const response = await axios.get('/api/rooms/getallrooms');
                const data = response.data;
                setRooms(data);
            } catch (error) {
                setError(true);
                console.error('Error fetching rooms:', error);
            }
            setLoading(false);
        }
        fetchRooms();
    }, []);

    function filterByDate(dates) {
        setFromDate(moment(dates[0]).format('DD-MM-YYYY'));
        setToDate(moment(dates[1]).format('DD-MM-YYYY'));

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
            </div>
            <div className='row justify-content-center mt-3'>
                {loading ? (
                    <Loader />
                ) : rooms.length > 0 ? (
                    rooms.map((room, index) => (
                        <div className='col-md-9 mt-2' key={index}>
                            <Room room={room} fromdate={fromdate} todate={todate} /> {/* Pass the correct values */}
                        </div>
                    ))
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
}

export default HomeScreen;
