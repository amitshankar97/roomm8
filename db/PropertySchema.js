var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertySchema = new Schema({
    id: String,
    roomm8_rating: Number,
    comments: Array,
    users: Array
});

module.exports = propertySchema;