import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const UserReservations = () => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReservations = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const res = await axios.get('http://localhost:5000/api/reservations', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setReservations(res.data);
            } catch (err) {
                console.error(err.response.data.error);
            }
        };

        fetchReservations();
    }, [navigate]);

    const handleDelete = async (pnrNumber) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:5000/api/reservations/${pnrNumber}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setReservations(reservations.filter(reservation => reservation.pnrNumber !== pnrNumber));
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    return (
        <div className="container">
            <h2>My Reservations</h2>
            <ul className='showResevation'>
                {reservations.map((reservation) => (
                    <li key={reservation.pnrNumber}>
                        <div className="data">
                            <strong>PNR Number:</strong> {reservation.pnrNumber} -
                            <strong> Train Number:</strong> {reservation.trainNumber} -
                            <strong> Class Type:</strong> {reservation.classType} -
                            <strong> Date of Journey:</strong> {reservation.dateOfJourney} -
                            <strong> From:</strong> {reservation.fromPlace} to
                            <strong> To:</strong> {reservation.toPlace}
                        </div>
                        <div className="btn">
                            <button onClick={() => handleDelete(reservation.pnrNumber)}>Cancel</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserReservations;
