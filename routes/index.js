require('./RoomRouter');
require('./UserRouter');
const route = require("express").Router();


route.get('/', (req, res) => {
    res.send('Hello World!')
});

route.get('/user', (req, res) => {
    res.send('User Test!')
});

route.post('/user', (req, res) => {
    res.send('User Sign Up!')
});

route.get('/user/:userId', (req, res) => {
    res.send('User Sign Up!')
});

route.get('/room', (req, res) => {
    res.send('List of rooms!')
});

route.get('/room/:roomId', (req, res) => {
    res.send('Getting new room!')
});

route.post('/room', (req, res) => {
    res.send('Create new room!')
});





module.exports = route