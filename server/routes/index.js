const express = require('express');
const ApiRouter = require('./ApiRouter');
const router = express.Router();

router.use('/', ApiRouter);

module.exports = router;