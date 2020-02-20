let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Synapse model schema.
 */
let synapseSchema = new Schema({
    info: String,
    name: String,
    model: String,
    on_pre: String,
    on_post: String,
    delay: Number
});

let Synapse = mongoose.model('Synapse', synapseSchema);

module.exports = Synapse;