document.getElementById('chat_id').hidden = true;

document.getElementById('clickButton').onclick = () => {
    document.getElementById('chat_id').hidden = false;
    document.getElementById('input_name_id').hidden = true;
    document.getElementById('clickButton').hidden = true;
    document.getElementById('name_label_id').hidden = true;
}

document.getElementById('private-room').hidden = true;

document.getElementById('private_button').onclick = () => {
    document.getElementById('private-room').hidden = false;
    document.getElementById('container').hidden = true;
}

function switchOff() {
    document.getElementById('message').hidden = true;
    document.getElementById('send').hidden = true;
}

document.getElementById('enter_password_and_name').hidden = true;

document.getElementById('enter_private_room').onclick = () => {
    document.getElementById('container').hidden = true;
    document.getElementById('enter_password_and_name').hidden = false;
}

