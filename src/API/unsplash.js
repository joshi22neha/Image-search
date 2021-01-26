import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID hzVchlXIPnE4s0zON35NIOZjG2ztWTgip7gk-9-ZtK8'
    }
});