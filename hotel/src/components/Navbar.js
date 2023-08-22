import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const user = JSON.parse(localStorage.getItem('Current User'))

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">BELMOUND</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    {user ? (<><h1>{user.name}</h1></>) : (<>
                        <li class="nav-item active">
                            <a class="nav-link" href="home">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li> </>)}
                </ul>
            </div>
        </nav>
    )
};

export default NavBar

