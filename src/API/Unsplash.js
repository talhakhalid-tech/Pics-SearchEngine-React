import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 39084a3242aef2ec11e55cd223f966e2b0b4bc637d0f609caa40d234ee00ddf2'
    }
})