var db = require('../db');

module.exports = async function (context, req) {
    return db.getProperty(req.query.id)
        .then(property => {
            return property;
        })
        .catch(err => {
            context.log(err);
            return {
                status: 404,
                body: "Not found"
            }
        });
};