import fs from 'fs'
const fileJson = '../key.json'
const data = JSON.parse(fs.readFileSync(fileJson)); 

function useKey(value) {
    if(data.find(e => e.key === value)) {
        const indexKey = data.find(e => e.key === value)
        const content = indexKey.content
        indexKey.key = '';
        indexKey.content = '';
        fs.writeFileSync(fileJson, JSON.stringify(data, null, 4));      

        return content;
    }
}

useKey('')