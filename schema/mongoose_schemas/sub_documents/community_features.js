const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Community Features : because the user will store a list of prefered features, and the properties themselves
 * will have a list themselves it will remove redundant code by storing the schema in one location
 */

var communityFeaturesSchema = new Schema({
    basketball_court: {
        type: Boolean,
        required: false
    },

    putting_green: {
        type: Boolean,
        required: false
    },

    tenis_court: {
        type: Boolean,
        required: false
    },

    racquetball_court: {
        type: Boolean,
        required: false
    },

    sauna: {
        type: Boolean,
        required: false
    },

    gym: {
        type: Boolean,
        required: false
    },

    pool: {
        type: Boolean,
        required: false
    },

    hottub: {
        type: Boolean,
        required: false
    },

    courtyard: {
        type: Boolean,
        required: false
    },

    on_site_laundry: {
        type: Boolean,
        required: false
    },

    study_center: {
        type: Boolean,
        required: false
    },

    buisness_center: {
        type: Boolean,
        required: false
    },

    concierge: {
        type: Boolean,
        required: false
    },

    dog_park: {
        type: Boolean,
        required: false
    },

    coffie_bar: {
        type: Boolean,
        required: false
    }
});

/*
 * Export communityFeaturesSchema
 */

module.exports = communityFeaturesSchema;
