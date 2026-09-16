import axios from 'axios';

export default axios.create({
    baseURL:'http://100.26.212.146:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});


