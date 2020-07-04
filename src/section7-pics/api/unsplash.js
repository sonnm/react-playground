import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID AAU4gZHDtnh8kWjmMv-23054Zp9H_NT30bHrA1cKWn0',
  },
});
