const express = require('express');
const router = express.Router();

const ALLOWED_IPS = [
    "127.0.0.1"
];

router.use((req, res, next) => {
    console.log(req.ip)
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed) {
        res.status(401).send('Not authorized');
    } else {
        next();
    }
});

router.get('/users', (req, res) => res.send('users'));
router.post('/user', (req, res) => res.send('user POST'));

router.get('/messages', (req, res) => res.send('messages'));
router.post('/message', (req, res) => res.send('message POST'));

module.exports = router;