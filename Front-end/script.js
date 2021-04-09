let socket = io();
socket.on('connection', () =>{
    console.log("Connected" + socket.id)
}) 