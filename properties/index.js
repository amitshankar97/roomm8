const MILE_TO_METER = 1609.34;
var maps = require('../gMaps');
var db = require('../db');

module.exports = async function (context, req) {

    if (!req.query.lat || !req.query.lon) {
        return {
            status: 400,
            body: 'Please provide valid coordinates'
        };
    }

    let radius = req.query.radius ? (Number(req.query.radius) * MILE_TO_METER) : null;

    return maps.getProperties(req.query.lat, req.query.lon, radius)
        .then((properties) => db.appendDBProperties(properties))
        .catch(err => context.log(err));
};