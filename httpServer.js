'use strict';

const fs = require('fs')
const path = require('path')
const petpath = path.join(__dirname, 'pets.json');

const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/pets' && req.method === 'GET'){
    
        fs.readFile('/pets', 'utf8', (err, data) => {
            if(err) {
                console.error(err.stack);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                return res.end('Internal Server Error');
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(data)
        })
    } else if (req.url === '/pets' && req.method === 'GET') {
        fs.readFile('/pets', 'utf8', (err, data) => {
            if(err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                return res.end(data);
            }

            res.setHeader('Content-Type', 'application/json');
            res.end();
        })
    }
      else {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('resource not found');
      }
})

server.listen(port, () => {
    console.log('Listning on port ', port);
})