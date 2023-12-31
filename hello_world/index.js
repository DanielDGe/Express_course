// installed on node_modules folder
const express = require("express");

// initializing the app
const app = express();

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// the main route of our app
app.get("/", (request, response) => {
    console.log(request.url);
    response.send("Hello World!");
});

// bootstraping the app
app.listen(3000);
console.log("Express app started on port 3000");