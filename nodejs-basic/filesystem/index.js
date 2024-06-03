
const fs = require('fs');
const path = require('path');
const data = path.resolve("filesystem", 'notes.txt');

const fileReadCallback = (error,data) => {
    if(error){
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
}


fs.readFile(data,'UTF-8',fileReadCallback);

// Perintah Eksekusi 
// node ./filesystem/index.js
