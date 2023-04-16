const pg = require('pg');

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  port: 5432,
  password: "pass123",
  database: "postgres"
});

client.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log('Connected to DB');
});

module.exports = { client };