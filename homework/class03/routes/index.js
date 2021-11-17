const router = require("express").Router();
const orderHandler = require("../handler/coffeeShop");


router.get("/orderList", orderHandler.getOrderList);
router.post("/addOrderList", orderHandler.addNewItem);



module.exports = router;