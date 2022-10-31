require('dotenv').config();
const axios = require('axios');

const { GEOCODE_API_KEY, GEOCODE_API_URL, GEOCODE_API_SERVICE } = process.env;

// GET request to mapbox api endpoint to fetch coordinates for a given location
const getCoordinates = async location => {
    const queryParams = new URLSearchParams({
        access_token: GEOCODE_API_KEY
    });
    return await axios.get(`${GEOCODE_API_URL}/${GEOCODE_API_SERVICE}/${location}.json?${queryParams}`);
}

module.exports = { getCoordinates }