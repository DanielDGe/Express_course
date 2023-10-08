const express = require('express');
const path = require('path');
const axios = require('axios')

const app = express();

// using the ejs template
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let users = [
    {
        id: 1,
        name: "joe",
        lastname: "mc millan"
    },
    {
        id: 2,
        name: "juan",
        lastname: "perez"
    }
]

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hey everyone, this is my webpage',
        users
    });
});

app.get('/users', (req, res) => {
    res.render('users', {
        title: 'Users page'
    });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard'
    });
});

app.get('/posts', async (req, res) => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    res.render('posts', {
        title: 'Posts',
        posts: response.data
    });
});

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.listen(3000, () => console.log('server on port 3000'));