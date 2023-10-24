import React from "react";
import { Link } from "react-router-dom";
import './landingscreen.css';
import { FiWifi } from 'react-icons/fi';


export function Landingscreen() {
    
    const iconStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div>
            <div className="row landing">
                <div className="col-md-12 text-center">
                    <div className='back' style={{
                        backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        height: '100vh', backgroundSize: 'cover', backgroundImage: 'url("https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2020/04/The-Muraka-Undersea-Bedroom-scaled.jpg")', backgroundPosition: 'bottom',
                    }}>
                        <h2 style={{ color: 'white' }}>Welcome to Belmound Hotel</h2>
                        <h1 style={{ color: 'white' }}>A new version of Luxury</h1>
                        <Link to='/home'> <button className="btn btn-secondary">BOOK NOW</button></Link>
                    </div>
                </div>
            </div>

            {/* About or services */}
            <div className="services">
                <h1>SERVICES</h1>
                <div>
                    <FiWifi size={32} color="blue" />
                    <p>Free WiFi Services</p>
                </div>

                
            </div>
        </div>
    );
}
