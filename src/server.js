"use strict";

import { insertDataDB } from './database.js';



export function getData() {
  const password = document.getElementById('id_password_room');
  const name = document.getElementById('id_name_room');
  if (String(name).length == 0 && String(password).length == 0) {
    throw "name or password is incorrect";
  }

  insertDataDB(password,name);
}

