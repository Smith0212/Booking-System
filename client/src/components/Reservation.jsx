import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles.css";

const Reservation = () => {
  const [trainNumber, setTrainNumber] = useState('');
  const [classType, setClassType] = useState('');
  const [dateOfJourney, setDateOfJourney] = useState('');
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/reservations', {
        trainNumber,
        classType,
        dateOfJourney,
        fromPlace,
        toPlace,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/my-reservations');
      alert('Reservation successful');
      
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return (
    <div className="container">
      <h2>Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Train Number" value={trainNumber} onChange={(e) => setTrainNumber(e.target.value)} required />
        <input type="text" placeholder="Class Type" value={classType} onChange={(e) => setClassType(e.target.value)} required />
        <input type="date" placeholder="Date of Journey" value={dateOfJourney} onChange={(e) => setDateOfJourney(e.target.value)} required />
        <input type="text" placeholder="From Place" value={fromPlace} onChange={(e) => setFromPlace(e.target.value)} required />
        <input type="text" placeholder="To Place" value={toPlace} onChange={(e) => setToPlace(e.target.value)} required />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
