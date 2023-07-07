const express = require('express');
const app = express();

const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    socket.on('send name', (username) => {
      io.emit('send name', username, socket.id); 
    });
  
    socket.on('send message', (chat) => {
      io.emit('send message', chat, socket.id); 
    });
  });
  

server.listen(port, () => {
	console.log(`Server is listening at the port: ${port}`);
});
