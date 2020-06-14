import React from 'react';
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': process.env.REACT_APP_THE_CAT_API_KEY
    },
    timeout: 2000,
    responseType: 'json'
});