// src/components/Booking/BookingForm.js
import React, { useState } from 'react';
import { createBooking } from '../../api/api';

function BookingForm() {
  const [jobId, setJobId] = useState('');
  const [tradespersonId, setTradespersonId] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking({ job: jobId, tradesperson: tradespersonId, booking_date: bookingDate });
      setJobId('');
      setTradespersonId('');
      setBookingDate('');
      alert('Booking created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={jobId} onChange={(e) => setJobId(e.target.value)} placeholder="Job ID" required />
      <input type="text" value={tradespersonId} onChange={(e) => setTradespersonId(e.target.value)} placeholder="Tradesperson ID" required />
      <input type="datetime-local" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
      <button type="submit">Create Booking</button>
    </form>
  );
}

