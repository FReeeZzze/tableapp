const { Router } = require('express');
const { showTable } = require('../controllers/apiController.js');

const apiRouter = Router();

//get запросы
apiRouter.get('/showtable', showTable);

module.exports = apiRouter;