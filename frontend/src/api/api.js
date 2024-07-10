import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const registerUser = (userData) => API.post('/register/', userData);
export const loginUser = (userData) => API.post('/token/', userData);
export const refreshToken = (refreshToken) => API.post('/token/refresh/', { refresh: refreshToken });
export const fetchJobs = () => API.get('/jobs/');
export const createJob = (jobData) => API.post('/jobs/', jobData);
export const fetchBookings = () => API.get('/bookings/');
export const createBooking = (bookingData) => API.post('/bookings/', bookingData);
export const fetchReviews = () => API.get('/reviews/');
export const createReview = (reviewData) => API.post('/reviews/', reviewData);
