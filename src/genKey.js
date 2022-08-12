import fs from 'fs'
const fileJson = '../key.json'
const data = JSON.parse(fs.readFileSync(fileJson));

function writeFile(key, content) {
    data.push({key: key, content: content});
    fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));    
}

function genKey(content) {
    let key = "";
    for(let i = 0; i < 8; i++) {
        if(i % 2 === 0) {
            key.split("").reverse().join("");
        }
        key += String.fromCharCode(Math.floor(Math.random() * (121 - 33) + 33));
    };

    key.split("").reverse().join(""); 
    return writeFile(key, content);
}

genKey('')

