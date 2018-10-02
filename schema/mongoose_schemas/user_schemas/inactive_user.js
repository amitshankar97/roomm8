/*
    inactive_user : a user that has validated their account, but has not yet compleated the profile process or has opted make their account private

    - Specification :
        - there will not be a TTL for inactive users, they will persist until deleated
        - the Schema will be identical to the temp_user except there will be no GENERATED_VERIFYICATION_URL
*/

temp_user: {
    name: {
        first: {
            type: String,
            max: 25,
            required: true,
        },

        last: {
            type: String,
            max: 25,
            required: true,
        }
    },

    // Must provide student email
    email: {
        Type: StudentEmail,
        required: true
    },

    // test inputed password to see that it meets password requirements for security, then salt and hash the password before you insert it
    password: {
        type: Password,
        // there needs to be a middleware to handle the valid password test and hashing
        required: true
    },

    // keep track of the date created for this account
    createdAt: {
        type: Date,
        // TTL for the temp account is 7 days, this is tracked in seconds 7days * 24hours * 60minutes * 60 seconds
        expires: ttl_days * seconds_per_day,
        default Date()
    },

    // keep track of the randomly generated url that is alphanumeric and 48 characters long
    GENERATED_VERIFYICATION_URL: {
        type: ActivationLink,
        required: true
    }
}
