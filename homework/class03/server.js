const http = require("http");
const app = require("./app");

const server = http.createServer(app);


// go check coffeeShop.js file error :)
server.listen(8080, ()=>{
    console.log("Server is running");
});
