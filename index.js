const express = require('express');
const { getCoordinates } = require('./geocodeService');

const app = express();
const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/coordinates/:location', async (req, res) => {
    const responseData = await getCoordinates(req.params.location);
    if (responseData?.data) res.send(responseData.data);
    else res.send({ error: true, message: responseData.err })
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});
