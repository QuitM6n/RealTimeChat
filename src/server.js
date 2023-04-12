
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./database.js');

let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('/home/ruslan/Desktop/JsApp/public'));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "../public/" + "index.html");
})

app.post('get/room/data"', urlencodedParser, function (req, res) {
  const { password, name } = req.body;
  db.client.query(`INSERT INTO PrivateRoom(password, name) VALUES($1,$2)`, [password, name], (err, result) => {
    if (!err) {
      res.send('Success inserted');
    } else {
      console.error('Error: ', err.message);
    }
    db.client.end();
  });
 // to do 
})

app.post('/get/user', urlencodedParser, (req, res) => {
  const { password_chat, name_chat } = req.body;
  db.client.query('SELECT password FROM PrivateRoom WHERE name=$1', [name_chat], (err, result) => {
    if (!err) {
      res.send('Success inserted');
    } else {
      console.error('Error: ', err.message);
    }
    db.client.end();
  })
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})


