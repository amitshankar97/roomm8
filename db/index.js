var mongoose = require('mongoose');
var dbUri = process.env.MONGO_CONNECTION_STRING;
var dbConnection = mongoose.connect(dbUri, {useNewUrlParser: true, dbName: 'properties'});

var PropertySchema = require('./PropertySchema');
var Property = mongoose.model('Property', PropertySchema);

module.exports.createProperty = (property) => {
    let newProperty = new Property({
        id: property.id,
        roomm8_rating: 0,
        comments: []
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

module.exports.postComment = (comment) => {
    return new Promise((resolve, reject) => {
        Property.find(comment.propertyID, (err, property) => {
            if(err) reject(err);
            property.comments = {...property.comments, ...comment};
            property.save(err => {reject(err);});
            resolve(true);
        })
    });
}

module.exports.appendDBProperties = async (googleProperties) => {
    let res = [];

    let promises = googleProperties.map(async prop => {
        
        let emptyProps = {
            roomm8_rating: -1,
            comments: [],
            users: []
        };

        try {
            const response = await db.getProperty(prop.id);
            if(response === null) {
                return {...prop, ...emptyProps};
            }
            return {...response, ...prop};
        }
        catch(err) {
            return {...prop, ...emptyProps};
        }
    });

    for (let prom of promises) {
        try {
            let property = await prom;
            res.push(property);
        }
        catch (err) {
            console.log(err);
        }

    }

    return res;
}