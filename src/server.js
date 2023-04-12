
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./database.js');

let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('/home/ruslan/Desktop/JsApp/public'));

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "../public/" + "index.html");
})

app.post('/api', urlencodedParser, function (req, res) {
  response = {
    password: req.body.password,
    name: req.body.name,
  };

  const { password, name } = req.body;
  db.client.query(`INSERT INTO PrivateRoom(password, name) VALUES($1,$2)`, [password, name], (err, result) => {
    if (!err) {
      res.send('Success inserted');
    } else {
      console.error('Error: ', err.message);
    }
    db.client.end();
  });
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})


