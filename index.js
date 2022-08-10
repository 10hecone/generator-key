const fs = require('fs')

function genKey(num) {
    var key = "";
    for(let i = 0; i < num; i++) {
        const char = String.fromCharCode((Math.random() * (126 - 33) + 33));
        var key = key + char
    };
    fs.writeFileSync('./mdp.json', JSON.stringify({key: key, length: num}));
    return key;
}

genKey(64)