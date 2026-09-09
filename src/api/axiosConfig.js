import axios from 'axios';

export default axios.create({
    baseURL:'http://100.25.166.213:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
