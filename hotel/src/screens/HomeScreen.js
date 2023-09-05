
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

    const [fromdate, setFromDate] = useState(null);
    const [todate, setToDate] = useState(null);
    const [duplicaterooms, setDuplicateRooms] = useState([]);

    useEffect(() => {
        async function fetchRooms() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
                const data = response.data;
                setRooms(data);
                setDuplicateRooms(data);
            } catch (error) {
                setError(true);
                console.error('Error fetching rooms:', error);
            }
            setLoading(false);
        }
        fetchRooms();
    }, []);

    function filterByDate(dates) {
        const fromDate = dates[0] ? dates[0].format('DD-MM-YYYY') : null;
        const toDate = dates[1] ? dates[1].format('DD-MM-YYYY') : null;


        setFromDate(fromDate);
        setToDate(toDate);


        const filteredRooms = duplicaterooms.filter(room => {
            if (room.currentbookings.length === 0) {
                return true;
            }
            return room.currentbookings.every(booking => {
                return (
                    !moment(fromDate).isBetween(booking.fromdate, booking.todate, null, '[]') &&
                    !moment(toDate).isBetween(booking.fromdate, booking.todate, null, '[]')
                );
            });
        });

        setRooms(filteredRooms);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>

                <div className='col-md-5'>
                    <input type='text' className='form-control' placeholder='search rooms' />
                </div>

                <div className='col-md-3'>
                    <select className='form-control'>
                        <option value='all'>ALL</option>
                        <option value='delux'>Delux</option>
                        <option value='non-delux'>Non-Delux</option>
                    </select>

                </div>

            </div>
            <div className='row justify-content-center mt-3'>
                {loading ? (
                    <Loader />
                ) : rooms.length > 0 ? (
                    rooms.map((room, index) => (
                        <div className='col-md-9 mt-2' key={index}>
                            <Room room={room} fromdate={fromdate} todate={todate} />
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
