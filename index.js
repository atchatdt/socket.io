// Package.json
require('dotenv').config({path: './config/.env'})
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Tự định nghĩa
const client = require('./router/client.router')
const {socket} = require('./utils/socketHandler');


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("public"))


app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.use('/',client);

// Handler socket
socket(io)


http.listen(PORT, ()=> console.log(`App running ${PORT}`))
