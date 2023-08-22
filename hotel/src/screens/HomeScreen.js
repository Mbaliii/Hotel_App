import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';


function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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

    return (
        <div className='container'>
            <div className='row justify-content-center mt-3'>
                {loading ? (<Loader />) : rooms.length > 1 ? (rooms.map((room) => {
                    return <div className='col-md-9 mt-2'>
                        <Room room={room} />
                    </div>;
                })
                )
                    : (<Error />)}
            </div>
        </div >
    );
}

export default HomeScreen;


