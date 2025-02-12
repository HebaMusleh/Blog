// Import the Axios library to make HTTP requests. Axios is a popular JavaScript library for this purpose.
import axios from 'axios';

// Create an instance of Axios and store it in the 'apiInstance' variable. This instance will have specific configuration options.
const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json', 
    },
});

export default apiInstance;
