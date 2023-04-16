function isValid() {
    let password = document.getElementById('id_password_room').value;
    let name_room = document.getElementById('id_name_room').value;

    if (password == null && password == undefined) {
        document.getElementById('ViewError').innerHTML += 'Password undefined or just is empty';
        return false;
    } else if (String(password).length < 7) {
        document.getElementById('ViewError').innerHTML += 'Password is less than  it should be';
        return false;
    } else if (String(password).length > 15) {
        document.getElementById('ViewError').innerHTML += 'Increased the maximum password length';
        return false;
    } else if (!name_room.match(/[a-zA-Z0-9]+/)) {
        document.getElementById('ViewError').innerHTML += 'Field should be contains only english symbols';
        return false;
    } else {
        return true;
    }
}

function isValidName() {
    let name_user = document.getElementById('input_name_id').value;
    
    if (!name_user.match(/[a-zA-Z0-9]+/)) {
        document.getElementById('ForError').innerHTML += 'Name should be contains only english symbols';
        return false;
    }

    return true;
}
