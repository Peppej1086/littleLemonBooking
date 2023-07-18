import React, { useState, useEffect } from 'react';
import { fetchAPI } from './Api';

function BookingForm({ dispatchTimes, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (date) {
        const fetchedTimes = await fetchAPI(date);
        setAvailableTimes(fetchedTimes);
      }
    };

    fetchAvailableTimes();
  }, [date]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      date,
      time,
      guests,
      occasion
    };
  
    submitForm(formData);
  };  

  return (
    <div className="container formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;