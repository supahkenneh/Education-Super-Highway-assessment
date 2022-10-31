require('dotenv').config();
const axios = require('axios');

const GEOCODE_API_URL = "https://api.mapbox.com/geocoding/v5";
const GEOCODE_API_SERVICE = "mapbox.places";
const { GEOCODE_API_KEY } = process.env;

// fetch coordinates using mapbox api endpoint and access token for a given address
const getCoordinates = async location => {
    const queryParams = new URLSearchParams({
        access_token: GEOCODE_API_KEY
    });
    return await axios.get(`${GEOCODE_API_URL}/${GEOCODE_API_SERVICE}/${location}.json?${queryParams}`);
}

module.exports = { getCoordinates }