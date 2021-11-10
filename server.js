// we
const http = require("http");
const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.write("<h1>This is h1</h1>");
    response.write("<p>just chilling");
    response.end();
})

server.listen(8080, ()=>{
    console.log("Pershendetje Bote");
});