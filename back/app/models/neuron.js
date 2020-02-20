let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Synapse model schema.
 */
let neuronSchema = new Schema({
    name: String,
    formula: String,
    reset: String,
    info: String,
    args: Array
});

let Neuron = mongoose.model('Neuron', neuronSchema);

module.exports = Neuron;