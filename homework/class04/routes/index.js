const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');
const handler = require("../handler/index")


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

router.get("/planets", handler.allPlanets);
router.post("/planets", handler.addPlanet);
router.get("/planets/:id", handler.getPlanetById);
router.put("/planets/:id", handler.updatePlanet);
router.delete("/planets/:id", handler.destroyPlane);


router.use('*', async (req, res, next) => {
    return res.status(404).json('Not Found.');
});

module.exports = router;