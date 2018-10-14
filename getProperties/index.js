var db = require('../db');

module.exports = async function (context, req) {
    let filter = {}

    if(req.query.lat) {
        if(req.query.lon && req.query.radius) {

            filter.location = {
                $near: {
                    $maxDistance: req.query.radius * 1609.34, // convert to meters
                    $geometry: {
                        type: "Point",
                        coordinates: [req.query.lon, req.query.lat]
                    }
                }
            };

        } else {
            return {
                status: 400,
                body: 'Please provide valid coordinates'
            }
        }
    }

    if(req.query.name) {
        filter.name = req.query.name
    }

    if(req.query.rating) {
        filter.rating = { $gte: Number(req.query.rating) }
    }

    context.log(filter);

    return db.getProperties(filter)
        .then(properties => {
            context.log(properties)
            return properties;
        })
        .catch(err => {
            return {
                status: 400,
                body: err
            }

        });
};