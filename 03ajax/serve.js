const express = require('express');

const app = express();

app.get('/serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello');
})

app.listen(8000, () => {
    console.log('start')
})