const express = require('express');
const path = require('path');
const axios = require('axios');
const connectDB = require('./db')

const app = express();

connectDB();

// using the ejs template
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express and DB'
    });
});