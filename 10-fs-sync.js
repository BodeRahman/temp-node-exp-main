//Synchronously reads the entire contents of a file.
//destructing fs
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
//const fs = require("fs");
//fs.readFileSync

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

//console.log(first, second)

//Creates, Writes and overwrites file content
// flag is to append content to the file
writeFileSync(
    "./content/result-sync.txt", 
    `Here is the result : ${first}, ${second}`,
    {flag: "a"}
)
console.log("done with this task"); 
console.log("starting the next one");  