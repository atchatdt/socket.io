
exports.socket = io =>{

    io.on('connection', sockets =>{
        console.log({sockets})
    })
}