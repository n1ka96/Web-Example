const express = require('express');

const app = express();

app.get('/serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name:'ageguigu',
        age:18,
        gender:'男'
    }
    let str = JSON.stringify(data);
    response.send(str);
    // setTimeout(function() {
    //     response.send('delay')
    // }, 3000)
})

app.post('/serve', (request, response) => {
    response.setHeader('Access-Control-Allow-Headers','*')
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO AJAX POST');
})

app.listen(8000, () => {
    console.log('start')
})