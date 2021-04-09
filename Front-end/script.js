let socket = io();
socket.on('connection', () => {
    console.log("Connected" + socket.id)
}) 

$(function () {
    let msglist = $('#msglist')
    let sendbtn = $('#sendmsg')
    let msgbox = $('#msgbox')

    sendbtn.click(function() {
        socket.emit('sendmsg', {message: msgbox.val()})
    })

    socket.on('recv_msg', function (data){
        msglist.append($('<li>' + data.message + '</li>'))
    })
})