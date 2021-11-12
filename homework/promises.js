// require fs module for accessing in filesystem 
const fs = require("fs/promises");
//require path module the use one general path for all OS
const path = require("path");


// the path of the file
const pathToWriteFile = path.join(__dirname,"new.txt");
// const for file writer where the asyncronos function will be save 
const fileToBeWritten = async (pathToWriteFile, contentToBeWritten) => {
   await fs.writeFile(pathToWriteFile, contentToBeWritten);
   console.log("file is written.")
};
// const for file reader where the asyncronos function will be save
const fileToBeReaded = async(fileRead) => {
   const text = await fs.readFile(fileRead);
   console.log("Data readed: \n" + text.toString())
};


// exporting the the function as module
module.exports = {fileToBeWritten, fileToBeReaded};