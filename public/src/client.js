const messages = document.getElementById('storage_text');
const private_messages = document.getElementById('private_storage_text');

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

    let input = document.getElementById('message');
    input.addEventListener('keypress', function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    connection.onopen = (event) => {
        console.log('Success connected');
    };

    connection.onclose = (event) => {
        console.log('Client is disconnected', event.reason);
    };

    connection.onerror = (event) => {
        event.preventDefault();
        console.error('WebSocket error observed: ', event.toString());
        window.location.reload(); // this allows me to stay on the same page in case of an error
    };

    connection.addEventListener('message', event => {
        const data = JSON.parse(event.data);
        if (data.type === "message") {
            addMessage(data.data, data.name);
        } else if (data.type == "text") {
            addFile(data.file);
        } else {
            console.error('Cannot find data of required type');
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

    function sendFile() {
        let fileInput = document.getElementById('file_id');
        let file = fileInput.files[0];
        let reader = new FileReader();

        reader.onload = () => {
            var content = reader.result;
            addFile(content);
            connection.send(JSON.stringify({ type: "text", file: content }));
        }
        reader.readAsText(file);
    };

    function addFile(content) {
        const node = document.createElement("P");
        const file_content = document.createTextNode(content);
        node.appendChild(file_content);
        messages.appendChild(node);
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
    }
}


if (window.location.href == 'http://localhost:8080/private_room.html') {
    const private_connection = new WebSocket('ws://localhost:8080/private_room.html');

    document.getElementById('private_button_disconnect').onclick = () => {
        private_connection.close();
    }

    private_message.addEventListener('keypress', function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

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
        } else if (data.type == "text") {
            addFile(data.file);
        } else {
            console.error("Failed to find need type of data");
        }
    });

    function privateSendFile() {
        let privateInputFile = document.getElementById('file_id_private')
        let file = privateInputFile.files[0];
        let readerFile = new FileReader();

        readerFile.onload = function () {
            var private_content = readerFile.result;
            addFile(private_content);
            private_connection.send(JSON.stringify({ type: "text", file: private_content }));
        }

        readerFile.readAsArrayBuffer(file);
    }

    function sendMessage() {
        if (!private_message && !username_private) {
            return false;
        }

        private_connection.send(JSON.stringify({ type: "message", data: private_message.value, name: username_private }));
        addMessage(private_message.value, username_private);
        private_message.value = "";
    }

    function addFile(private_content) {
        const node = document.createElement("P");
        const for_content = document.createTextNode(private_content);
        node.appendChild(for_content);
        private_messages.appendChild(node);
    }

    function addMessage(message, name) {
        const node_for_message = document.createElement("P");
        const node_for_users = document.createElement("P");

        const private_message = document.createTextNode(now.toString() + ': ' + message);
        const private_name = document.createTextNode(name);

        node_for_message.appendChild(private_message);
        node_for_users.appendChild(private_name);

        private_messages.appendChild(node_for_message);
        user_list_private.appendChild(node_for_users);

        private_message.value = "";
    }
}


