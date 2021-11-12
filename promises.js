const fs = require('fs/promises');
const path = require("path");

const pathToFile = path.join(__dirname, "http.txt");
const pathTOWriteFile = path.join(__dirname, "NewFile.txt")
const fileReader = async () => {
    const data = await fs.readFile(pathToFile);
    console.log(data.toString());

};

const fileWriter = async (contentToWrite) => {
    await fs.writeFile(pathTOWriteFile, contentToWrite);
};

module.exports = {fileReader, fileWriter};

// fs.readFile(pathToFile).then((data)=>{
//     console.log("File: " + __filename + " - is read.");
//     console.log(data.toString());
    
// }).catch((error)=>{
//     console.log("An error occured: " + error);
// })
