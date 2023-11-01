const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('./poem.txt', (err, data) => {
        if(err) reject(err);
        else resolve(err);
    })
})
p.then((resolve) => {
    console.log(resolve.toString());
}, (reject) => {
    console.log(reject);
})
