const express = require('express');
const router = express.Router();

const sessionRoute = require('./sessionRoutes');

router.use('/session', sessionRoute);

module.exports = router;
