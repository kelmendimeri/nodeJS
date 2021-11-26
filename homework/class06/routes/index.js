const router = require('express').Router();
const controller = require('../controller/residents');
const validateBody = require('../middlewares/residentValidator');



router.get('/residents', controller.getAllResidents);
router.post('/residents', validateBody, controller.addNewResident);
router.put('/residents/:id', validateBody, controller.updateResident);
router.delete('/residents/:id', controller.deleteResident);

module.exports = router;