//built-in global variables that help read and write files, and manage current script.

const fs = require('fs');
const process = require('process');
const axios = require('axios'); 

function cat(path) {
    //read the file with that path, and print the contents
    
    fs.readFile(path, 'utf8', function(err, data){
        //handle errors
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            //print the contents of the file
            console.log(`file contents: ${data}`); 
        }
    });
}

async function webCat(url) {
    //take a URL, using axios, read the content of that URL and print it.
    try {
        let resp = await axios.get(url);
        console.log(resp.data); 
    } catch (err) {
        console.log(`Error fetching ${url}: ${err}`); 
        process.exit(1); 
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path); 
} else {
    cat(path); 
}
