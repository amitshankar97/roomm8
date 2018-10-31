var db = require('../db');

module.exports = async function (context, req) {
    let comment = context.bindings.req.body;
    return comment;
};