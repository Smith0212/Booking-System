import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css";

const Cancellation = () => {
    const [pnrNumber, setPnrNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:5000/api/reservations/${pnrNumber}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Cancellation successful');
        } catch (err) {
            console.error(err.response.data.error);
        }
    };

    return (
        <div className="container">
            <h2>Cancellation</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="PNR Number" value={pnrNumber} onChange={(e) => setPnrNumber(e.target.value)} required />
                <button type="submit">Cancel</button>
            </form>
        </div>
        
    );
};

export default Cancellation;
