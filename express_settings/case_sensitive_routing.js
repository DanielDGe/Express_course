const express = require("express");

const app = express();

//Las settings de express van antes de los middlewares.
app.set('appName', 'Express course'); //Guardando una variable en el objeto app
app.set('case sensitive routing', true);


//Middlewares
app.use(express.json());

app.get("/Users", (req, res) => {
    res.send("Important users");
});

app.get("/users", (req, res) => {
    res.send("tipical users");
});

app.listen(3000);
console.log(`Server ${app.get('appName')} on port 3000`);