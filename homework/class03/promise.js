const fs = require("fs/promises");
const path = require("path");


const pathToRead = path.join("./Files/", "orderList.json");
const pathToWrite = path.join("./Files/", "orderList.json");



const toWriteFile = async(contentToBeWritten)=>{
    await fs.writeFile(pathToWrite, contentToBeWritten)
};

const toReadFile = async()=>{
   await fs.readFile(pathToRead)
};


module.exports = {toWriteFile, toReadFile};