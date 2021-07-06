const express = require('express');
const heroApi = require('../controllers/hero.api');
const jwtMd = require('../midlewares/jwt.midleware');
const router = express.Router();

/* REST Course. */
router.get('/', jwtMd.verifyToken, heroApi.list);
router.get('/:id', heroApi.get);
router.post('/', heroApi.create);
router.put('/:id', heroApi.update);
router.delete('/:id', heroApi.remove);

module.exports = router;