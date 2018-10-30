const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_KEY,
    Promise: Promise
});

module.exports.getProperties = (lat, lon, radius) => {

    let mapsRequest = {
        query: 'apartments',
        location: [lat, lon]
    };

    if (radius != null) {
        mapsRequest.radius = radius;
    }

    return googleMapsClient.places(mapsRequest)
        .asPromise()
        .then((res) => {
            return res.json.results;
        })
        .catch((err) => {
            console.log(err);
        });
}