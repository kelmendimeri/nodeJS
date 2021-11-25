const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagerDocs.json')
const controller = require('../controllers/residents');


router.get('/residents', controller.getAllResidents);
router.post('/residents', controller.addNewResident);
// router.get("/residents/:id", controller.getResidnetById);
router.put('/residents/:id', controller.updateResident);
router.delete('/residents/:id', controller.deleteResident);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

module.exports = router;