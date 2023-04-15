
const messages = document.getElementById('storage_text');
const private_messages = document.getElementById('private_storage_text');

const sendButton = document.getElementById('send');
const username = document.getElementById('input_name_id');

const private_message = document.getElementById('message_private');
const user_list = document.getElementById('connected_name');
const user_list_private = document.getElementById('connected_private_name');


const today = new Date();
let now = today.toLocaleTimeString('it-IT').slice(0, 5);

if (window.location.href == 'http://localhost:8080/index.html') {
    const connection = new WebSocket('ws://localhost:8080/index.html');

    document.getElementById('disconnect_id').onclick = () => {
        connection.close();
    }

    connection.onopen = (event) => {
        console.log('Success connected');
    };

    connection.onclose = (event) => {
        console.log('Client is disconnected', event.reason);
    }

    connection.onerror = (event) => {
        console.error('WebSocket error observed: ', event.toString());
    }

    connection.addEventListener('message', event => {
        const data = JSON.parse(event.data);
        if (data.type === "message") {
            addMessage(data.data, data.name);
        }
    });

    function sendMessage() {
        const message = document.getElementById('message').value;
        if (!message && !username.value) {
            return false;
        }

        connection.send(JSON.stringify({ type: "message", data: message, name: username.value }));
        addMessage(message, username.value);
        message.value = "";
    }

    function addMessage(message, name) {
        const node = document.createElement("P1");
        const node_name = document.createElement("P2");

        const text_for_message = document.createTextNode(now.toString() + ': ' + message);
        const text_for_name = document.createTextNode(name);

        node.appendChild(text_for_message);
        node_name.appendChild(text_for_name);

        messages.appendChild(node);
        user_list.appendChild(node_name);

        message.value = "";
    }
}

if (window.location.href == 'http://localhost:8080/private_room.html') {
    const private_connection = new WebSocket('ws://localhost:8080/private_room.html');

    document.getElementById('private_button_disconnect').onclick = () => {
        private_connection.close();
    }

    var username_private = prompt("Enter your username");

    private_connection.onopen = (event) => {
        console.log('Success connected');
    };

    private_connection.onclose = (event) => {
        console.log('Client is disconnected', event.reason.toString());
    }

    private_connection.onerror = (event) => {
        console.error('WebSocket error observed: ', event.toString());
    }

    private_connection.addEventListener('message', event => {
        const data = JSON.parse(event.data);
        if (data.type === "message") {
            addMessage(data.data, data.name);
        }
    });

    function sendMessage() {
        if (!private_message && !username_private) {
            return false;
        }

        private_connection.send(JSON.stringify({ type: "message", data: private_message.value, name: username_private }));
        addMessage(private_message.value, username_private);
        private_message.value = "";
    }

    function addMessage(message, name) {
        const node_for_message = document.createElement("P");
        const node_for_users = document.createElement("P1");

        const private_message = document.createTextNode(now.toString() + ': ' + message);
        const private_name = document.createTextNode(name);

        node_for_message.appendChild(private_message);
        node_for_users.appendChild(private_name);

        private_messages.appendChild(node_for_message);
        user_list_private.appendChild(node_for_users);

        private_message.value = "";
    }
}


