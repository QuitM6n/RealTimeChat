import db from './database.js';

// let sock = new WebSocket('ws://localhost:8070');

// sock.onopen = () => {
//     console.log('Success connected');
// }

// sock.onerror = function (error) {
//     console.log("[ERROR descript: " + error + "]")
// }

// document.getElementById('send').onclick = function () {
//     const storage = document.getElementById('storage_text');
//     const name = document.getElementById('input_name_id');
//     if (!isName(name)) {
//         switchOff();
//         return;
//     } else {
//         let text = document.getElementById('message');
//         storage.innerHTML = name.value + ": " + text.value;
//         sock.send(text.value);
//         text.value = "";
//     }
// };


// document.getElementById('add_private').onclick = () => {
//     const name = document.getElementById('id_name_room').value;
//     const password = document.getElementById('id_password_room').value;

//     if (String(name).length == 0 && String(password).length == 0) {
//         throw "name or password is incorrect";
//     }

//     db.insertDataDB(password,name);
// }

// document.getElementById('change_password_room').onclick = () => {
//     // to do
// }

// function isName(name) {
//     if (name == null || null == undefined) {
//         console.log('Inccorect name [#error]');
//         return false;
//     } else if (String(name).indexOf(' ') !== -1) {
//         console.log('Name cannot contains space');
//         return false;
//     } else {
//         return true;
//     }
// }