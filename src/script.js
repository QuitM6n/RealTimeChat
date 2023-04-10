document.getElementById('chat_id').hidden = true;

function isName() {
    let name = document.getElementById('input_name_id').value;
    if (name == null || null == undefined) {
        console.log('Inccorect name [#error]');
        return false;
    } else if (String(name).indexOf(' ') !== -1) {
        console.log('Name cannot contains space');
        return false;
    } else {
        return true;
    }
}

document.getElementById('clickButton').onclick = () => {
    document.getElementById('chat_id').hidden = false;
    document.getElementById('input_name_id').hidden = true;
    document.getElementById('clickButton').hidden = true;
    document.getElementById('name_label_id').hidden = true;
}