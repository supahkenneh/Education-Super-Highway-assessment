const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getCoordinates } = require('./geocodeService');

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requests will come in the an array of addresses (strings), each address will be sent to the mapbox api to obtain their coordinates, once responses from all addresses have been received, server can send the payload back to the client
app.post('/coordinates', async (req, res) => {
    const allResponses = await Promise.all(req.body.addresses.map(async address => {
        const responseData = await getCoordinates(address);
        if (responseData?.data) return responseData.data;
        else return { error: true }
    }));
    res.send(allResponses);
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});
