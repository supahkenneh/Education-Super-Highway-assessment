const express = require('express');
const app = express();

const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/coordinates/:address', (req, res) => {
    console.log(req.params);
    res.send(req.params.address);
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});
