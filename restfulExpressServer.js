'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const pets = [
    {
    "name": "Cornflake", 
    "age": 3, 
    "kind": "parakeet"
    },
    {
    "name": "Fido", 
    "age": 3, 
    "kind": "parakeet"   
    },
];

app.set('port', process.env.port || 8000);
app.use(bodyParser.json());

app.post('/pets', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.send(pet)
})
app.get('/pets/3', (req, res) => {
    const i = Number.parseInt(req.params.index);
    const pet = pets[i]
    res.send(pet);
})

app.listen(app.get('port'), () => console.log('Listening on ', app.get('port')))