let Synapse = require('../models/synapse.js');
let isEmptyObject = require('../utils/empty')
let db = require

/**
 * GET REQUEST '/synapse/:id' retrieves a synapse model.
 * @param {Object} req
 * @param {Object} res
 */
exports.findOne = (req, res) => {
    Synapse.findOne({'_id': req.params.id}, function(err, synapse){
        if(err) res.status(400).json({"message":"No synapse with the given ID.","error": err});
        res.json(synapse);
    });
};

/**
 * GET REQUEST '/synapse' retrieves all synapses.
 * @param {Object} req
 * @param {Object} res
 */
exports.find = (req, res) => {
    Synapse.find({}, function(err, synapses){
        if(err){
            res.status(500).json({"message":"Something went wrong.","error": err});
        }else if(isEmptyObject(synapses)){
            res.status(500).json({"message":"No synapse registered yet.","error": err});
        }else{
            res.json(synapses);
        }
    });
};

/**
 * POST REQUEST '/' creates an input.
 * @param {Object} req
 * @param {Object} res
 */
exports.create = (req, res) => {
    Synapse.create({
        'name': "STDP",
        'info': "Use for training."
    }, function(err, synapse){
        if(err) res.status(400).json({ 'message':'Something went wrong during the creation of the input.', 'error': err });
        res.json({'synapse':synapse, 'message':'Synapse created with success'});
    });
};