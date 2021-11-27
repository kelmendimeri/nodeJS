const router = require('express').Router();
const controller = require('../controller/residents');

router.get("/residents", controller.getAllResidents);
router.post("/residents", controller.addNewResident);
router.put("/residents/:name", controller.updateResident);
router.delete("/residents/:name", controller.deleteResident);

module.exports = router;