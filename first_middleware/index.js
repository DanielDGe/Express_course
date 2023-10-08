const express = require("express");
const app = express();


// can finish with a respones or continue with next
//Cualquiera ruta que llegue a mi aplicacion va a tener que pasar por aqui
app.use((req, res, next) => {
    console.log("In comes a request to: ", req.url, ", with method: ", req.method);
    //res.end("Request Received"); //acaba con la ejecucion.
    next() //Continua con la ejecucion y la ruta solicitada.
});

//Aqui no pasa por la verificacion del segundo middleware y carga directamente la ruta, sin hacer la verificacion.
app.get('/profile', (req, res) => {
    res.send('profile page')
})

//2 Middleware apilados
app.use((req, res, next) => {

    if (req.query.login === 'fazt@faztweb.com') {
        next()
    } else {
        res.send('No autorizado') //Acaba con la ejecucion y no continua a la ruta solicitda.
    }
    
});

app.get("/", (req, res) => res.send("home page"));

app.get("/about", (req, res) => res.send("about page"));

app.get("/dashboard", (req, res) => res.send("dashboard page"));

// you can use app.listen for shorthand
app.listen(3000);
console.log("server on port", 3000);