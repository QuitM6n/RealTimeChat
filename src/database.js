"use strict";


import pg from 'pg';

const client = new pg.Client({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: "kubuntu123",
    database: "postgres"
})

client.connect(function (err) {
  if (err) {
      throw err;
  }
  console.log('Connected to DB');
});

export function insertDataDB(password, name) {
  // client.query("INSERT INTO PrivateRoom(password,name) VALUES(?,?)", [password, name], function (err, res) {
  //     if (err) {
  //         console.log(err);
  //     }

  //     console.log("Data:", res);
  //     client.end();
  // });
}