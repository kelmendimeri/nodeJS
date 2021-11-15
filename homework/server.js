const httpRequest = require("http"); // require http requirest module
const path = require("path");

const server = httpRequest.createServer(); //creating the server
const fileOperations = require("../homework/promises") // importing the functions from promise.js file {reader and writer function} "../ I used it just to be sure I am in the right direcotry"


// putting the server on work
server.listen(8080, ()=>{
    // address is method that return the port, adress(127.0.0.1) and also holds the standard IPvX
    console.log("Server is running on port: " + server.address().port);
    // calling the reader and writer function from the promises file
    fileOperations.fileToBeReaded(path.join("readfile.txt"));
    fileOperations.fileToBeWritten(path.join("new.txt"),"C++, Ruby, C#, Java, Python").then(()=>{}).catch(() => {});
});
