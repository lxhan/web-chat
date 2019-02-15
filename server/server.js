const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', socket => {
    console.log('User connected');

    socket.on('join', (params, callback) => {
        console.log(params);
    })
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});