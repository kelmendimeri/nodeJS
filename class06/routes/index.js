const router = require('express').Router();
const tendzerinjaHandlers = require('../controllers/tendzerinja');
const bodyValidator = require('../middlewares/bodyValidation');

router.get('/tendzerinja', tendzerinjaHandlers.getAllTendzerinja);
router.post('/tendzerinja', bodyValidator, tendzerinjaHandlers.addNewTendzere);
router.get('/tendzerinja', tendzerinjaHandlers.getTendzereById);
router.delete('/tendzerinja/:id', tendzerinjaHandlers.deleteTendzere);
router.put(
  '/tendzerinja/:id',
  bodyValidator,
  tendzerinjaHandlers.updateTendzere
);


router.use('*', (req, res, next) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;