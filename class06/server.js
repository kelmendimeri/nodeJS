require('dotenv').config();
const http = require("http");
const app = require('./app');
const connectToDb = require('./config/db');


const PORT = process.env.PORT;
const server = http.createServer(app)

connectToDb()
.then(()=> {
    server.listen(PORT, () => {
        console.log("Server connected to db and is running...");
    });
})
.catch((err)=>{console.log(err)})
