const express = require('express');
const app = express();
const http = require('http');

const bodyParser = require('body-parser');
const db = require('./database.js');
const PORT = 8000;

let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('/home/ruslan/Desktop/JsApp/public'));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "../public/" + "index.html");
})

app.post('/create/room', urlencodedParser, function (req, res) {
  const { password, name } = req.body;
  db.client.query(`INSERT INTO PrivateRoom(password, name) VALUES($1,$2)`, [password, name], (err, result) => {
    if (!err) {
      res.send('Success inserted');
      res.redirect('http://localhost:8000/')
    } else {
      res.write('404 not found');
      console.error('Error: ', err.message);
    }
    db.client.end();
  });

})

app.post('/get/user', urlencodedParser, (req, res) => {
  const { password_chat, name_chat } = req.body;
  db.client.query('SELECT password FROM PrivateRoom WHERE name=$1', [name_chat], (err, result) => {
    if (!err) {
      let dbPass = result.rows[0];
      if (dbPass.password == password_chat) {
        res.redirect('http://localhost:8000/private_room.html');
      } else {
        console.log('Passworc does not match');
      }
    } else {
      res.write('404 not found');
      console.error('Error: ', err.message);
    }
    db.client.end();
  })
})

app.get('/private_room.html', function (req, res) {
  res.sendFile(__dirname + "../public/" + "private_room.html");
})

const server = app.listen(PORT, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

