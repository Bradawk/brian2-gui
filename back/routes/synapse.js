let express = require('express');
let router = express.Router();
let synapseController = require('../app/controllers/synapseController');

router.route('/')
  .get(synapseController.find)
  .post(synapseController.create);

router.route('/:id')
  .get(synapseController.findOne);

module.exports = router;