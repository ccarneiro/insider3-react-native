import axios from 'axios';

const key = process.env.API_KEY;

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

// https://api-ssl.bitly.com/v4/shorten

export default api;
