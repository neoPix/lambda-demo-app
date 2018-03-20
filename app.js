const express = require('express');
const superb = require('superb');
const huh = require('huh');

const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: `Hello ${superb()} world` });
});

app.get('/excuse', (req, res) => {
    res.status(500).json({ error: huh.get('en') });
});

module.exports = app;