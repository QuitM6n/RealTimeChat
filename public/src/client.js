
const connection = new WebSocket('ws://localhost:8080/index.html');
const messages = document.getElementById('storage_text');
const sendButton = document.getElementById('send');
const username = document.getElementById('input_name_id');

const today = new Date();
let now = today.toLocaleTimeString('it-IT').slice(0,5);

connection.onopen = (event) => {
    console.log('Success connected');
};

connection.onclose = (event) => {
    console.log('Client is disconnected');
}

connection.onerror = (event) => {
    console.error('WebSocket error observed: ', event.toString());
}

connection.onmessage = (event) => {
    messages.innerHTML += event.data;
}

document.getElementById('send').onclick = () => {
    const message = document.getElementById('message');
    messages.innerHTML += now + ': ' + message.value+'<br>';
    connection.send(message.value);
    message.value = "";
}

