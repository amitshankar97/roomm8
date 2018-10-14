var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var propertySchema = new Schema({
    address:  String,
    location: { type: "Point", coordinates: [Number]},
    id: String,
    place_id: String,
    icon: String,
    name: String,
    photos: Array,
    rating: Number
});

module.exports = propertySchema;