const router = require('express').Router();
const controller = require('../controller/residents');
const bodyValidator = require('../middlewares/residentValidator');

router.get("/residents", controller.getAllResidents);
router.post("/residents", bodyValidator, controller.addNewResident);
router.put("/residents/:name", bodyValidator, controller.updateResident);
router.delete("/residents/:name", controller.deleteResident);


module.exports = router;