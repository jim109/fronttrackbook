import axios from 'axios';

const dataApi = axios.create({

    baseURL:'https://trackbook-back.onrender.com/api'
});


export default dataApi;