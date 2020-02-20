let express = require('express');
let router = express.Router();
let neuronController = require('../app/controllers/neuronController');

router.route('/')
  .get(neuronController.find)
  .post(neuronController.create);

router.route('/:id')
  .get(neuronController.findOne);

module.exports = router;