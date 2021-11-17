const { json } = require("express");
const operation = require("../promise");

//should be replaced or removed after we can read from the file
const orderList = [
    {
        id: 1,
        name: "Frappe",
        price: 100
    },
    {
        id: 2,
        name: "Turkish",
        price: 50
    }
];


 /**  error on response -> Promise {<pending>}
  *  but is working with resolver printed in console ?????!!!!!! 
  */

  const getOrderList = (req, res, next)=>{
    return res.status(200).json(operation.toReadFile.toString())
  }


/**
 * this is reading from object array orderList in the top but works fine fix the bug above leave this one
 * 
 * const getOrderList = (req, res, next)=>{
 * return res.status(200).json(orderList)
 * };
*/

const addNewItem = (req, res, next) => {
    const body = req.body;
    const newItem = {
        id: orderList.length + 1,
        title: body.name,
        price: body.price
    }
    orderList.push(newItem)
    const dataToJSON = JSON.stringify(orderList)
    const writing = operation.toWriteFile(dataToJSON)
    return res.status(200).json(writing)
};


module.exports = {getOrderList, addNewItem};