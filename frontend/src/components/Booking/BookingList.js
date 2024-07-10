// src/components/Booking/BookingList.js
import React, { useState, useEffect } from 'react';
import { fetchBookings } from '../../api/api';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const { data } = await fetchBookings();
      setBookings(data);
    };
    getBookings();
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.job.title} - {booking.booking_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
