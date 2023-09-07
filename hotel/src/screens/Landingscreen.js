import React from "react"
import { Link } from "react-router-dom"

export function Landingscreen() {
    return (
        <div className="row landing">
            <div className="col-md-12 text-center">
                <div className='back' style={{
                    backgroundImage: `url("https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720")`
                }}>
                    <h2 style={{ color: 'white' }}> Welcome to Belmound Hotel</h2>
                    <h1 style={{ color: 'white' }}>A new version of Luxury</h1>
                    {/* change your background in css */}
                    <Link to='/home'> <button className="btn btn-secondary" style={{ color: 'white' }}>BOOK NOW</button></Link>
                </div>
            </div>
        </div>
    )
}