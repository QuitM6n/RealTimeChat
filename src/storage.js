const fs = require('fs');

function addMessage(message, name) {
    const JsonData = JSON.parse(message + name);
    fs.writeFile('message.txt', JsonData, function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Success added message to file');
        }
    });
}

function addFile(file) {
    fs.writeFile('message.txt', file, function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Success added message to file');
        }
    });
}

module.exports = { addMessage, addFile };