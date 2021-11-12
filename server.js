// we need to import the http module by using require function, In order to save the value returned 
const http = require("http");
const concatinateStrings = require("./function");
const fileOperation = require("./promises");
require("./promises");

// ./ this is for current directory
// ../ one directory above(or back [<-]) 

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.write("<h1>This is h1</h1>");
    response.write("<p>just chilling");
    response.end();
})

server.listen(8080, ()=>{
    const newString = concatinateStrings("bye","baby");
    console.log(newString);
    fileOperation.fileReader().then(()=>{});
    fileOperation.fileWriter("C#, Java, Ruby, C++").then(()=>{}).catch(()=>{});
});