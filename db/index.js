var mongoose = require('mongoose');
var dbUri = process.env.MONGO_CONNECTION_STRING;
var dbConnection = mongoose.connect(dbUri, {useNewUrlParser: true, dbName: 'properties'});

var PropertySchema = require('./PropertySchema');
var Property = mongoose.model('Property', PropertySchema);

module.exports.createProperty = (property) => {
    let newProperty = new Property({
        address: property.formatted_address,
        location: [property.geometry.location.lng, property.geometry.location.lat],
        id: property.id,
        place_id: property.place_id,
        icon: property.icon,
        name: property.name,
        photos: property.photos,
        rating: property.rating
    });

    return newProperty.save();
}


module.exports.getProperty = (id) => {
    return new Promise((resolve, reject) => {
        Property.findOne({id: id}, (err, property) => {
            if(err) reject(err);
            resolve(property);
        })
    });
}

module.exports.getProperties = (filter) => {
    return new Promise((resolve, reject) => {
        Property.find(filter, (err, properties) => {
            if(err) reject(err);
            resolve(properties);
        })
    });
}