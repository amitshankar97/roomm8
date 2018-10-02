var propertySchema = new Schema({
    // the property being reviewed
    property: {
        type: Schema.ObjectId,
        // NOTE the name of the 'ref' property must change
        ref: 'property'
    },

    // the user writing the review
    user: {
        type: Schema.ObjectId,
        // NOTE the name of the 'ref' property must change
        ref: 'property'
    },

    writen_date: {
        type: Date,
        default Date.now,
        required: true
    },

    /*
     * NOTE : how do i allow for editing
     */
     edited_date: {
         type: Date,
         default Date.now,
         required: true
     },

    /*
     * 1 to 5 star rating system
     */

    likleyness_to_reccomend: {
         type: Number,
         min: 1,
         max: 5,
         required: false
    },

    internet_speed: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    noise:  {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    office_staff: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    maintanance_staff: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    clenly_facilities: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    // ovens, fridge, ect...
    fixture_quality: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    // general quality of room
    room_quality: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    neighborhood: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },

    safety: {
        type: Number,
        min: 1,
        max: 5,
        required: false
    },
});

/*
 * TODO : include bellow content into the schema
 */

// How should I sort the reviews?
    // Reviews that are deemed the most helpfull and the newest. I think

// I am thinking the reviews will be inside of the property itself that way the number of querries is kept to a minumum

// The review will have a random `_id` for each review

// contain a `ref` to the user who created the review
author: {
    _id:
    database:
    collection:
}

// if we allow the user to change their username we would have to change this I think this should be hiden from
// I am afraid of retaliation from the property owners if a user speeks porely about their property
reviewer_name: {
    // use a method to auto grab this
    Type: String,
    required: true
},

// how long should it be, 50/75 characters max?
review_title: {
    Type: String,
    Max: 75,
    // should it be required
},

// I do not think there should really be a max, maybe 1500 characters?
review_title: {
    Type: String,
    Max: 1500,
    // should it be required
},

//out of 5 stars
rating: {
    //sufficient Parking
    parking: {
        Type: Number,
        min: 1,
        max: 5
    },

    //response time for problems
    parking: {
        Type: Number,
        min: 1,
        max: 5
    },

    //gym/amenities
    amenities: {
        Type: Number,
        min: 1,
        max: 5
    },

    //pet-friendliness
    pet_friendliness: {
        Type: Number,
        min: 1,
        max: 5
    }

    // get a function that takes the sum of the reviews and then finds the average review and places it here
    overall: {
        Type: Number,
        min: 1,
        max: 5
    }
}

//was the review helpful
review_response: {
    yes: {
        // this should contain a raw integer count that we can increment to tell how many people thought it was helpfull but then include information about the user who thought it was helpfull that way people can not say it was helpfull more than once or like and dislike a post more
    },

    no: {

    }
}
