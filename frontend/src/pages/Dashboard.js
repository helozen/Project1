import React from 'react';
import JobList from '../components/Job/JobList';
import JobForm from '../components/Job/JobForm';
import BookingList from '../components/Booking/BookingList';
import BookingForm from '../components/Booking/BookingForm';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <JobForm />
      <JobList />
      <BookingForm />
      <BookingList />
    </div>
  );
}

export default Dashboard;
