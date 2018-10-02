const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Unit Features : because the user will store a list of prefered features, and the properties themselves
 * will have a list themselves it will remove redundant code by storing the schema in one location
 */

var unitFeaturesSchema = new Schema({
    /*
     * Kitchen
     */

    microwave: {
        type: Boolean,
        required: false
    },

    oven: {
        present: {
            type: Boolean,
            required: false
        },

        oven_type: {
            /*
             * (electric/gas) (true/false)
             */
            type: Boolean,
            require: false
        }
    },

    range: {
        present: {
            type: Boolean,
            required: false
        },

        range_type: {
            /*
             * (electric/gas) (true/false)
             */
            type: Boolean,
            require: false
        }
    },

    refrigerator: {
        type: Boolean,
        required: false
    },

    stainless_steal: {
        type: Boolean,
        required: false
    },

    dishwasher: {
        type: Boolean,
        required: false
    },

    garbage_disposal: {
        type: Boolean,
        required: false
    },

    granite_counters: {
        type: Boolean,
        required: false
    },

    /*
     * Flooring
     */

    carpet: {
        type: Boolean,
        required: false
    },

    hardwood_floors: {
        type: Boolean,
        required: false
    },

    tile_floors: {
        type: Boolean,
        required: false
    },

    vinly_floors: {
        type: Boolean,
        required: false
    },

    /*
     * Bathroom
     */

    bathtub: {
        type: Boolean,
        required: false
    },

    /*
     * General
     */

    air_conditioning: {
        type: Boolean,
        required: false
    },

    evaporative_cooling: {
        type: Boolean,
        required, false
    }

    heating: {
        type: Boolean,
        required: false
    },

    ceiling_fan: {
        type: Boolean,
        required: false
    },

    /*
     * Room
     */

    ceiling_lights: {
        type: Boolean,
        required: false
    },

    furnished: {
        type: Boolean,
        required: false
    },

    in_unit_laundry: {
        type: Boolean,
        required: false
    },

    pation_balcony: {
        type: Boolean,
        required: false
    },

    recently_renovated: {
        type: Boolean,
        required: false
    },

    walk_in_closet: {
        type: Boolean,
        required: false
    }
});

/*
 * Export unitFeaturesSchema
 */

module.exports = unitFeaturesSchema;
