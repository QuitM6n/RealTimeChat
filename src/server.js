const webSocket = require('ws');
const http = require('http');
const express = require('express');

const port = 8060;
const server = http.createServer(express);
let s = new webSocket.Server({ server });
s.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    s.clients.forEach(function each(element) {
      if (element !== ws && element.readyState == webSocket.OPEN) {
        element.send(message);
      }
    });
    console.log('Recived: ' + message);
    ws.send('From server: ', +message);
  });
  ws.on('close', function () {
    console.log('Client is lost');
  });

})

server.listen(port, () => {
  console.log('Server is listeing on ${port}')
});