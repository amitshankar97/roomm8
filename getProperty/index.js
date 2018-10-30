var db = require('../db');

module.exports = async function (context, req) {
    return db.getProperty(req.query.id)
        .then(property => {
            
            if(property == null) {
                db.createProperty(req.query.id);
            }

            return property;
        })
        .catch(err => {
            return {
                status: 404,
                body: err
            }
        });
};