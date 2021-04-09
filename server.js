const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')


const app = express();
const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(path.join(__dirname, 'Front-end')));

io.on('connection', (socket) => {
    console.log('New socket formed from' + socket.id)
    socket.emit('Connected')
})

server.listen(2345, () => console.log('Website open on http://localhost:2345'))
