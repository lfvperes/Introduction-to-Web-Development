/*
SCC0219 - Exercise 6, part 2
Nome: LUIS FILIPE VASCONCELOS PERES
NroUSP: 10310641
*/

'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// convert request bodies to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));    // encode to URL

// READ
let route = router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    res.status(200).send({
        id: id,
        item: req.body
    });
});

// WRITE
let create = router.post('/:id', (req, res, next) => {
    const id = req.params.id;

    // 201: created
    res.status(201).send({
        id: id,
        item: req.body
    });
});

// WRITE (UPDATE)
let put = router.put('/:id', (req, res, next) => {
    // recovering parameters from URL
    const id = req.params.id;

    // 200: success
    res.status(200).send({
        id: id,
        item: req.body
    });
});

// DELETE
let del = router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    // 200: success
    res.status(200).send({
        id: id,
        item: req.body
    });
});

app.use('/store', route);
app.use('/store', create);
app.use('/store', put);
app.use('/store', del);

module.exports = app;