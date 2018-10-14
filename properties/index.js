const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_KEY,
    Promise: Promise
});

var db = require('../db');

module.exports = async function (context, req) {
    return getGoogleMapsResults(req.query.lat, req.query.lon)
    .then((properties) => {
        properties.map(property => db.createProperty(property))
    })
    .then(doc => {
        context.log(doc);
        return doc;
    })
    .catch(err => context.log(err));
};


function getGoogleMapsResults(lat, lon) {

    let mapsRequest = {
        query: 'apartments',
        location: [lat, lon]
    };


    return googleMapsClient.places(mapsRequest)
        .asPromise()
        .then((res) => {
            return res.json.results;
        })
        .catch((err) => {
            console.log(err);
        });
}