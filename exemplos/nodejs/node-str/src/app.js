'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// convert request bodies to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));    // encode to URL

let route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

let create = router.post('/', (req, res, next) => {
    // 201: created
    res.status(201).send(req.body);
});

let put = router.put('/:id', (req, res, next) => {
    // recovering parameters from URL
    const id = req.params.id;

    // 200: success
    res.status(200).send({
        id: id,
        item: req.body
    });
});

let del = router.delete('/', (req, res, next) => {
    // 200: success
    res.status(200).send(req.body);
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;