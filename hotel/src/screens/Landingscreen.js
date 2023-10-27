import React from "react";
import { Link } from "react-router-dom";
import './landingscreen.css';
import { FiWifi } from 'react-icons/fi';
import backgroundImage from '../assets/About.jpg';
import background from '../assets/background.JPEG';
import sp2 from '../assets/sp2.jpg';
import sp3 from '../assets/sp3.jpeg';
import spa from '../assets/spa.jpg';
import Spa from '../assets/Spa.jpg';
import Resturant from '../assets/Resturant.jpg';
import Bar from '../assets/Bar.jpg';
import Pool from '../assets/Pool.webp';
import snack from '../assets/snack.jpg';
import golf from "../assets/golf.jpg";
import parking from '../assets/parking.jpg';
import Scotter from '../assets/Scotter.jpg';
import game from '../assets/game.jpg';
import reserve from '../assets/reserve.jpg';
import jump from '../assets/jump.avif';
import ground from "../assets/ground.jpg";



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

            <div className="page-container">
                <div className="centered-content">
                    <h1>ABOUT US</h1>
                </div>
            </div>
            <h4 className="homeTitle">
                Breathtaking Views in the Heart of Belmound
            </h4>
            <h5 className="h5">Welcome to @Belmound Resort, a brand-new luxury<br />
                resort conveniently located on Benmore Road<br />
                in Sandton, Johannesburg</h5>
            <h6>Based in Benmore Gardens, the landmark@Belmound Resort<br />
                and lifestyle precinct is a mixed-use development,<br />
                with @Belmound Resort providing a luxurious experience <br />
                for discerning guests seeking a "Single Window" experience <br />
                n South African hospitality space Explore our beautiful resort and surroundings.
            </h6>
            <img src={backgroundImage} alt="About Us Image" style={{ width: "500px", height: "auto" }} />
            <img src={background} alt="About2" style={{
                width: "700px", height: "auto", position: "absolute", top: "800px", right: "0",
            }} />

            {/*MIDDLE SECTION  */}
            <div>
                <h4 className="page-container">Explore</h4>
            </div>
            <h5 className="h5-2">THE HOTEL</h5>
            <h4 className="description"> Based in Benmore Gardens, <br />
                within the striking new Acsiopolis mixed-use development,<br />
                @Belmound Resort is a luxury hotel that's breaking new ground <br />
                in the South African hospitality space.</h4>

            <div>
                {/* SPA */}
                <h4 className="spa">SPA</h4>
                <img src={sp2} alt="" className="spaImage" style={{ width: '260px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                <img src={sp3} alt="" className="spaImage" style={{ width: '260px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                <img src={spa} alt="" className="spaImage" style={{ width: '260px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                <img src={Spa} alt="" className="spaImage" style={{ width: '260px', margin: '20px', height: '190px', borderRadius: '20px' }} />
            </div>

            <div>
                <h2 class="display-5 mb-3 fw-bold" style={{ textAlign: 'center', color: 'goldenrod' }}>Something for everyone</h2>
                <p className="para">The resort boasts top-class facilities, including a restaurant,
                    <br />bar, day spa,and swimming pool.</p>

                <ul className="activities">
                    <li class="col-12 col-sm-6 mb-2 d-flex align-items-center"><i class="resorts-rental-done me-2 text-primary" ></i>Cinema - outdoor</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex align-items-center"><i class="resorts-rental-done me-2 text-primary"></i>Adventure Golf</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex align-items-center"><i class="resorts-rental-done me-2 text-primary"></i>Parking - covered</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex align-items-center"><i class="resorts-rental-done me-2 text-primary"></i>Snack Bar</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex align-items-center"><i class="resorts-rental-done me-2 text-primary"></i>Shuttle - complimentary</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex align-items-center"><i class="resorts-rental-done me-2 text-primary"></i>WiFi - free hotspots*</li>
                </ul>
            </div>


            {/* something for everyone */}
            <div className="activity">
                <div>
                    <img src={Resturant} alt="Facility 1" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div>
                    <img src={Bar} alt="Facility 2" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div>
                    <img src={Spa} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div>
                    <img src={Pool} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div>
                    <img src={golf} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div>
                    <img src={parking} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div>
                    <img src={snack} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
            </div>


            {/* another 1 */}


            <div>
                <h2 class="display-5 mb-3 fw-bold" style={{ textAlign: 'center', color: 'goldenrod' }}>Ideal for families</h2>
                <p className="lean">
                    We know that holidays are a time for breaking the mould of the daily grind, <br />
                    discovering new things and having fun,<br />
                    and so we planned our Resort's facilities with this in mind.
                </p>

            </div>

            <div>
                <ul>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center', color: 'blue' }}><i class="resorts-rental-done me-2 text-primary"></i>E-Scooters-Game Drive</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center' }}><i class="resorts-rental-done me-2 text-primary"></i>Game Reserve-Jumping Pillow</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center', color: 'blue' }}><i class="resorts-rental-done me-2 text-primary"></i>Playground-Rare Game Experience</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center' }}><i class="resorts-rental-done me-2 text-primary"></i>Swimming Pool</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center', color: 'blue' }}><i class="resorts-rental-done me-2 text-primary"></i>Table Tennis - outdoor</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center' }}><i class="resorts-rental-done me-2 text-primary"></i>Volleyball</li>
                    <li class="col-12 col-sm-6 mb-2 d-flex" style={{ textAlign: 'center', color: 'blue' }}><i class="resorts-rental-done me-2 text-primary"></i>Waterslide</li>
                </ul>
            </div>

            <div className="activity">
                <div>
                    <img src={Scotter} alt="Facility 1" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div class="col-6">
                    <img src={game} alt="Facility 2" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div class="col-6">
                    <img src={reserve} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
                <div class="col-6">
                    <img src={jump} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>

                <div class="col-6">
                    <img src={ground} alt="Facility 3" className="homeImage" style={{ width: '250px', margin: '20px', height: '190px', borderRadius: '20px' }} />
                </div>
            </div>


            <div class="milenia-grid-item">
                <article class="milenia-icon-box milenia-aligner" style={{ textAlign: 'center', color: 'black' }}>
                    <div class="milenia-aligner-outer">
                        <div class="milenia-aligner-inner">
                            <span class="milenia-icon-box-icon milenia-font-icon-cards"></span>

                            <div class="milenia-icon-box-content">
                                <h2 className="best">Best Price Guarantee</h2>
                                <p className="graph">For the best prices on our luxury rooms, studios and suites, book and pay directly on our website.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>


            <div class="milenia-grid-item">
                <article class="milenia-icon-box milenia-aligner" style={{ textAlign: 'center', color: 'black' }}>
                    <div class="milenia-aligner-outer">
                        <div class="milenia-aligner-inner">
                            <span class="milenia-icon-box-icon milenia-font-icon-calendar"></span>

                            <div class="milenia-icon-box-content">
                                <h2 className="best" >Book Now to Secure Availability</h2>
                                <p className="graph">Our instant booking system means that you can secure<br />
                                    your room immediately with immediate confirmation on the specific room type of your choice.</p>

                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="milenia-grid-item">
                <article class="milenia-icon-box milenia-aligner" >
                    <div class="milenia-aligner-outer">
                        <div class="milenia-aligner-inner">
                            <span class="milenia-icon-box-icon milenia-font-icon-clock"></span>

                            <div class="milenia-icon-box-content">
                                <h2 className="best" >Late Check-out on Request</h2>
                                <p className="graph" >Should you wish to check out of your room later than 10am, our reception team will do their best to accommodate you.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div class="milenia-grid-item">
                <article class="milenia-icon-box milenia-aligner">
                    <div class="milenia-aligner-outer">
                        <div class="milenia-aligner-inner">
                            <span class="milenia-icon-box-icon milenia-font-icon-wi-fi"></span>

                            <div class="milenia-icon-box-content">
                                <h2 className="best">Free Hi Speed Wi-Fi Available</h2>
                                <p className="graph">Log on to our complimentary Hi Speed Wi-Fi<br />
                                    throughout the hotel with dedicated fibre providing a seamless and uninterrupted service on several devices.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>


            {/* footer */}
            <div class="container">
                <div className="milenia-footer-row--inner" style={{ paddingTop: '50px', paddingBottom: '40px' }}>
                    <div class="milenia-grid milenia-grid--cols-4 milenia-grid--responsive-sm">
                        <div id="text-16" class="milenia-widget milenia-grid-item widget_text">
                            <div class="milenia-grid-item-inner">
                                <div class="milenia-grid-item-content">
                                    <div class="textwidget">
                                        <p>
                                            <b style={{ color: 'black' }}>Address:</b> 5 Benmore Rd, Benmore Gardens, Johannesburg, 2196</p>
                                        <p>
                                            <a style={{ textTransform: 'uppercase', letterSpacing: '1px' }} href="https://www.google.com/maps/place/5+Benmore+Rd,+Benmore+Gardens,+Johannesburg,+2196/@-26.0979704,28.0478435,17z/data=!3m1!4b1!4m5!3m4!1s0x1e95733a44db4001:0x5f374d023f7913c2!8m2!3d-26.0979704!4d28.0500322" target="_blank" rel="noopener">Get Directions</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="text-17" class="milenia-widget milenia-grid-item widget_text">
                            <div class="milenia-grid-item-inner"><div class="milenia-grid-item-content">
                                <div class="textwidget"><p><b style={{ color: 'black' }}>Phone:</b> +27 11 395 4777</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div id="milenia_social_icons-8" class="milenia-widget milenia-grid-item milenia_social_icons">
                            <div class="milenia-grid-item-inner">
                            </div>
                        </div>
                        <div id="text-18" class="milenia-widget milenia-grid-item widget_text">
                            <div class="milenia-grid-item-inner">
                                <div class="milenia-grid-item-content">
                                    <div class="textwidget">
                                        <p>
                                            <a style={{ textTransform: 'uppercase', letterSpacing: '2px', backgroundColor: '#c89720', color: "#fff", padding: '10px 25px', fontSize: '13px' }}
                                                href="/home" target="_blank" rel="noopener">BOOK NOW</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
