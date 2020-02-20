let Neuron = require('../models/neuron.js');
let isEmptyObject = require('../utils/empty')
let db = require

/**
 * GET REQUEST '/neuron/:id' retrieves a Neuron model.
 * @param {Object} req
 * @param {Object} res
 */
exports.findOne = (req, res) => {
    Neuron.findOne({'_id': req.params.id}, function(err, neuron){
        if(err) res.status(400).json({"message":"No neuron with the given ID.","error": err});
        res.json(neuron);
    });
};

/**
 * GET REQUEST '/neuron' retrieves all neurons.
 * @param {Object} req
 * @param {Object} res
 */
exports.find = (req, res) => {
    Neuron.find({}, function(err, neurons){
        if(err){
            res.status(500).json({"message":"Something went wrong.","error": err});
        }else if(isEmptyObject(neurons)){
            res.status(500).json({"message":"No neuron registered yet.","error": err});
        }else{
            res.json(neurons);
        }
    });
};

/**
 * POST REQUEST '/' creates a neuron.
 * @param {Object} req
 * @param {Object} res
 */
exports.create = (req, res) => {
    if(Object.keys(req.body).length !== 0){
        Neuron.create({
            'name': req.body.name,
            'formula': req.body.formula,
            'info': req.body.info
        }, function(err, neuron){
            if(err) res.status(400).json({ 'message':'Something went wrong during the creation of the neuron.', 'error': err });
            res.json({'neuron':neuron, 'message':'neuron created with success'});
        });
    }else{
        Neuron.create({
            'name': 'Izhikevich',
            'formula': 'dv/dt tau : 1',
            'info': 'Default neuron'
        }, function(err, neuron){
            if(err) res.status(400).json({ 'message':'Something went wrong during the creation of the neuron.', 'error': err });
            res.json({'neuron':neuron, 'message':'neuron created with success'});
        });
    }

};