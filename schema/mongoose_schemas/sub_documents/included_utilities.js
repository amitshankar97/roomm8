const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Unit Features : because the user will store a list of prefered features, and the properties themselves
 * will have a list themselves it will remove redundant code by storing the schema in one location
 */

var includedUtilitiesSchema = new Schema({
    gas: {
        type: Boolean,
        required: false
    },

    water: {
        type: Boolean,
        required: false
    },

    electricity: {
        type: Boolean,
        required: false
    },

    trash: {
        type: Boolean,
        required: false
    },

    tv: {
        type: Boolean,
        required: false
    },

    internet: {
        type: Boolean,
        required: false
    }    
});

/*
 * Export communityFeaturesSchema
 */

module.exports = includedUtilitiesSchema;
