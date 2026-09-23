const fs = require('fs'); // file system module 
const fsPromises = require('fs').promises; // file system promises module
const path = require('path'); // path module
const os = require('os'); // operating system module
const http = require('http'); // http module
const crypto = require('crypto'); // crypto module


 
//console.log(process.cwd()); // prints the current working directory
// console.log(__dirname); // prints the directory name of the current module
// console.log(__filename); // prints the file name of the current module

//console.log(process.env); // prints the environment variables
// console.log(process.argv); // prints the command line arguments


// function parseCommandLineArgs(args) {
//     const data = {};
//     for (let i = 2; i < args.length; i++) {
//         const key = args[i].replace(/^--/, ''); // remove leading '--'
//         data[key] = args[i + 1]; // assign the next argument as the value
//         i++; // skip the next argument since it's used as the value
//     }
//     return data;
// }

// let args = parseCommandLineArgs(process.argv);
// console.log(args); // prints the parsed command line arguments as an object


const dataSync = fs.readFileSync("config.json","utf-8");
console.log(dataSync); // prints the contents of config.json synchronously

// fs.readFile("config.json","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data); // prints the contents of config.json asynchronously
//     }
// });

fs.writeFile("config.json", JSON.stringify({ key: "Ali" }), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});