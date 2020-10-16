//built-in global variables that help read and write files, and manage current script.

const fs = require('fs');
const process = require('process');

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

// cat(process.argv[2]);