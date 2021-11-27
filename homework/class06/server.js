require('dotenv').config();
const http = require("http");
const connectToDb = require('./configs/db');
const app = require("./app");

const PORT = process.env.PORT;
const server = http.createServer(app);
connectToDb().then(()=>{
    server.listen(PORT, ()=>{
        console.log("Server is connected to Db and running...");
    })
}).catch((err)=>{
    console.log(err);
});
