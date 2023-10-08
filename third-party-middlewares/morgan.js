const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();

//Morgan muestra por consola los registros de las peticiones http y errores.
app.use(morgan('short')); //dev

app.use((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world');
});

// you can use app.listen for shorthand
http.createServer(app).listen(3000);