import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

const Navigation = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h2>Booking System</h2>
            </Link>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/reservation">Reservation</Link></li>
                <li><Link to="/cancellation">Cancellation</Link></li>
                <li><Link to="/my-reservations">My Reservations</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
