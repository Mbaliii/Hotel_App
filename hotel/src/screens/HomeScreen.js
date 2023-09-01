// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../App.css';
// import Room from '../components/Room';
// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import { DatePicker, Space } from 'antd';



// const { RangePicker } = DatePicker;

// function HomeScreen() {
//     const [rooms, setRooms] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);

//     const [fromdate, setFromDate] = useState();
//     const [todate, setToDate] = useState();
//     const [duplicaterooms, setdupilcaterooms] = useState([]);

//     useEffect(() => {
//         async function fetchRooms() {
//             try {
//                 setLoading(true);
//                 const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
//                 const data = response.data;
//                 setRooms(data);
//                 setdupilcaterooms(data);
//             } catch (error) {
//                 setError(true);
//                 console.error('Error fetching rooms:', error);
//             }
//             setLoading(false);
//         }
//         fetchRooms();
//     }, []);

//     function filterByDate(dates) {

//         const fromDate = dates[0].format('DD-MM-YYYY');
//         const toDate = dates[1].format('DD-MM-YYYY');

//         // duplicate rooms
//         var temprooms = []
//         var availibility = false
//         for (const room of duplicaterooms) {
//             if (room.currentbookings.length > 0) {
//                 for (const booking of room.currentbookings) {
//                     if (!moment(moment(dates[0].format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate))
//                         && (!moment(moment(dates[1].format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate))
//                         )
//                     ) {
//                         if (
//                             moment(dates[0].format('DD-MM-YY')) !== bookingmodel.fromdate &&
//                             moment(dates[0].format('DD-MM-YY')) !== bookingmodel.todate &&
//                             moment(dates[1].format('DD-MM-YY')) !== bookingmodel.fromdate &&
//                             moment(dates[1].format('DD-MM-YY')) !== bookingmodel.todate &&
//                         ){
//                             availibility = true
//                         }
//                     }
//                 }
//             }
//             if (availibility == true || room.currentbookings.length==0)

//             {
//                 temprooms.push(room)
//             }
//             setRooms(temprooms)
//         }
//         // ///////////////////////////////////////////////

//         setFromDate(fromDate);
//         setToDate(toDate);
//     }


//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-md-3'>
//                     <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
//                 </div>
//             </div>
//             <div className='row justify-content-center mt-3'>
//                 {loading ? (
//                     <Loader />
//                 ) : rooms.length > 0 ? (
//                     rooms.map((room, index) => (
//                         <div className='col-md-9 mt-2' key={index}>
//                             <Room room={room} fromdate={fromdate} todate={todate} />
//                         </div>
//                     ))
//                 ) : (
//                     <Error />
//                 )}
//             </div>
//         </div>
//     );
// }

// export default HomeScreen;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { DatePicker } from 'antd';
import moment from 'moment'; // Import moment library

const { RangePicker } = DatePicker;

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [fromdate, setFromDate] = useState(null); // Initialize fromDate and toDate with null
    const [todate, setToDate] = useState(null);
    const [duplicaterooms, setDuplicateRooms] = useState([]);

    useEffect(() => {
        async function fetchRooms() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
                const data = response.data;
                setRooms(data);
                setDuplicateRooms(data); // Initialize duplicaterooms
            } catch (error) {
                setError(true);
                console.error('Error fetching rooms:', error);
            }
            setLoading(false);
        }
        fetchRooms();
    }, []);

    function filterByDate(dates) {
        const fromDate = dates[0] ? dates[0].format('DD-MM-YYYY') : null; // Check if dates[0] exists
        const toDate = dates[1] ? dates[1].format('DD-MM-YYYY') : null; // Check if dates[1] exists

        // Update fromDate and toDate states
        setFromDate(fromDate);
        setToDate(toDate);

        // Filter rooms based on date range
        const filteredRooms = duplicaterooms.filter(room => {
            if (room.currentbookings.length === 0) {
                return true; // Room available if no bookings
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
