housing_preferences: {
    rent: {
        minimum: {
            type: Number,
            min: 0,
            max: 20000
        },

        maximum: {
            type: Number,
            min: 0,
            max: 20000
        }
    },

    /*
    TODO
    lease_type: {
        - Sublet
          - to lease from the other individual who actually holds the lease
        - Lease Type
          - individual, joint, no preference
    },
    */

    date_needed: {
        type: Date
    },

    community_features: {
        type: communityFeaturesSchema
    },

    included_utilities: {
        type:  includedUtilitiesSchema
    },

    unit_features: {
        type: includedUtilitiesSchema
    }
},

/*
 * If I save the posts and ratings within the property
 */
property_reviews: [{
    type: Schema.Types.ObjectId,
    // NOTE the name of the 'ref' must change
    ref: 'property_review'
}]
