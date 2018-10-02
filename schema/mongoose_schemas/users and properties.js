// TODO
included_utilities: {
    // Use subdocuments
    type: includedUtilitiesSchema
},

// TODO
community_features: {
    // Use subdocuments
    type: communityFeaturesSchema
},

// TODO
unit_features: {
    // Use subdocuments
    type: unitFeaturesSchema
}

/*
 * User selected
 */

favorited_users: [{
    type: Schema.Types.ObjectId,
    // NOTE the name of the 'ref' property must change
    ref: 'user'
}],

/*
 * User
 */

recomended_users: [{
    type: Schema.Types.ObjectId,
    // NOTE the name of the 'ref' property must change
    ref:
}]

/*
 * Property
 */

favorited_properties: [{
    type: Schema.Types.ObjectId,
    // NOTE the name of the 'ref' property must change
    ref: 'property'
}],

/*
 * Property
 */

recomended_properties: [{
    type: Schema.Types.ObjectId,
    // NOTE the name of the 'ref' property must change
    ref:
}]
