const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { carregaTodos, carregaPorId } = require('./controller');

// router.get('/all', controller.carregaTodos);
router.get('/all', (req, res) => carregaTodos({req, res}));
router.get('/:id', (req, res) => carregaPorId({req, res}));

module.exports = router;