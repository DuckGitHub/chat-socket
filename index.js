const express = require('express');
// se encarga de resolver si es path de linux o windows
const path = require('path');
const app = express();
const soketIO = require('socket.io');

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), () => {
  console.log(`server on port: ${app.get('port')}`);
});

const io = soketIO(server);

// lo emitido por el FE entra por el parametro socket
io.on('connection', (socket) => {
  socket.on('test', (data) => console.log(data));
});
