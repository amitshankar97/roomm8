const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const communityFeaturesSchema = require('./../sub_documents/community_features');
const includedUtilitiesSchema = require('./../sub_documents/included_utilities');
const unitFeaturesSchema = require('./../sub_documents/unit_features');

// store id of the reviews in the student's account profile

/*
    - To create a profile it should be the lowest barrier of entry :
        REQUIRED :
            - First name, Last name
            - School Email
            - Password

    - To use the service and to see anything you should have to authenticate the email for protection of the users
*/

/*
 * TODO : add hometown field
 * TODO : There needs to be a way for students to build into their profile if they have a room they are renting and how much they are asking as well as the amenities. Maybe there should be a section of the property finder that allows you to select "Posted by student" and allow them to post for free, and then have them link to their profile. This MUST be FREE. If a student has posted a property that they have for rent it should be LINKED on THE PROFILE
 */

var accountSchema = new Schema({
    /*
     * User specific information
     */
    created: {
        type: Date,
        default Date.now,
        required: true
    },

    name: {
        first: {
            type: String,
            required: true
        },

        last: {
            type: String,
            required: true
        },

        public_username: {
            type: String,
            // TODO Make the default first name + last name
            default: this.name.first + ' ' + this.name.last,
            required: true
        }
    },

    age: {
        age: {
            type: Number,
            min: 18,
            max: 122,
            required: true,
        },

        // NOTE Should there be a setting to disable age visibility, but then still use it to find roommate fits
        is_public: {
            type: Boolean,
            default: true,
            required: true
        }
    },

    gender: {
        /*
            Because with sex you can not be more than 1, there is no point to bitmap them, and 1 char takes less space than 1 integer

            Options:
            0 - male
            1 - female
            2 - transgender
            3 - other
        */
        type: Number,
        min: 0,
        max: 3
        required: true
    }

    contact: {
        email: {
            personal_email: {
                email: {
                    // TODO : implement type
                    type: PersonalEmail,
                    unique: true,
                    required: false
                },

                preferences: {
                    // should be displayed on a user profile page for other users
                    is_public: {
                        type: Boolean,
                        default: false,
                        required: true
                    }
                }
            },

            student_email: {
                email: {
                    // TODO : implement type
                    type: StudentEmail,
                    unique: true,
                    required: true
                },

                preferences: {
                    // should be displayed on a user profile page for other users
                    is_public: {
                        type: Boolean,
                        default: false,
                        required: true
                    }
                }
            },

            email_preferences: {
                // TODO

                /*
                 * This will tell how the system is suposed to contact the user
                 * Ex : should the user recieve emails when a new user or property is added, an dif yes,
                 *      how often?
                 */

                school_email_default: {
                    type: Boolean,
                    default: true,
                    required: true
                }

                subscriptions: {
                    articles: {
                        /*
                         * - Recieve email when a an article, ie a mailing list of information
                         * - NOTE : should this be a way to email promotions and ect.
                         */
                    },

                    properties: {
                        /*
                         * - Recieve email when price change, or any potential promotions for the properties that you are following
                         * - Recieve email when a property matches your prefered criteria
                         */
                    },

                    users: {
                        /*
                         * - Recieve email when a user matches your prefered criteria
                         */
                    },
                }
            }
        }

        phone_number: {
            // TODO : strip any possible '-' symbols, leave the plain numbers
            type: Number
        },

        facebook_profile: {
            type: String
        },

        twitter_profile: {
            type: String
        }
    }

    /*
     * Academic specific information
     */

    academic_information: {
        degree_status: {
            /*
                Undergraduate
                    0 - freshman
                    1 - sophmore
                    2 - junior
                    3 - senior
                4 - Post Graduate
                5 - Doctoral
                6 - Graduate/Professional
            */
            type: Number,
            min: 0,
            max: 6,
            required: true,
        },

        expected_graduation: {
            // TODO : make sure the user is not a `Graduate/Professional`
            semester: {
                /*
                    Options:
                    0 - spring
                    1 - summer
                    2 - fall
                    3 - winter
                */
                type: Number,
                min: 0,
                max: 3,
                // NOTE : this cant be 'required' because it may not apply to some classes of people ie graduate/professional, but for all other users I want it to be required.
                // NOTE : maybe implement a middleware that checks the status of the individual and throws an error if they are not a graduate/professional
                // required: true
            },

            year: {
                type: Number,
                // NOTE : should have a system that prevents you from saying 3000 or 1200
                // NOTE : this cant be 'required' because it may not apply to some classes of people ie graduate/professional, but for all other users I want it to be required.
                // NOTE : maybe implement a middleware that checks the status of the individual and throws an error if they are not a graduate/professional
                // required: true
            }
        },

        program: {
            /*
             * NOTE Should I just represent each as an integer to save space, and that way later if people want they can then have multiple by doing a bitmapping

             Options:
                 1 - Agriculture & Life Sciences
                 2 - Arch, Planning, & Landscape Arch
                 4 - Education
                 8 - Eller College of Management
                 16 - Engineering
                 32 - Fine Arts
                 64 - Humanities
                 128 - Letters, Arts & Science
                 256 - Medicine
                 512 - Nursing
                 1024 - Public Health
                 2048 - Science
                 4096 - Social & Behavioral Sciences
                 8192 - UA South
             */
            type: Number,
            min: 0,
            // NOTE : ideally a person would not select every single major, it might be fine to set the max to be the sum of the two highest majors
            //max: 16383,
            max: 12288,
            required: true,
        },

        full_time_student: {
            type: Boolean,
            default: true
        },

        veteran: {
            type: Boolean,
            default: false
        },

        transfer_student: {
            type: Boolean,
            default: false
        },

        international_student: {
            type: Boolean,
            default: false
        }
    },

    public_profile: {
        /*
         * TODO : public information
         */
        description: {
            type: String,
            max: 1500,
            required: true,
        },

        picture: {
            // NOTE
            // Should the actual picture be stored here, or should it just point to a link
            // profile picture should not excede a file size when sent, and maybe even compress upon recieval
        }
    },

    pets: {
        type:

        dogs:

        cats:

        other:
    },

    /*
    * NOTE : this discribes personal traits and preferences
    */
    personal: {
        smoking: {
            smoking: {
                /*
                  Options:
                  n - never
                  o - outside
                  i - inside
                 */
                type: String,
                enum: ['n', 'o', 'i'],
                required: true
            },

            comment: {
                type: String
                max: 400
            }
        },

        social_habits: {
            social_habits: {
                /*
                  NOTE you will be able to select multiple options
                  Options:
                  1 - host parties at home
                  2 - go out to parties
                  4 - alchahol-free
                 */
                type: Number,
                min: 0,
                max: 7

            },

            comment: {
                type: String
                max: 400
            }
        },

        study_preferences: {
            study_preferences: {
                /*
                  Options:
                  h - at home
                  o - outside of home, ex: library
                  b - both
                 */
                type: String,
                enum: ['h', 'o', 'b']
            },

            comment: {
                type: String
                max: 400
            }
        },

        sleep_habits: {
            sleep_habits: {
              /*
                  Options:
                  m - morning person
                  n - night person
                  f - flexible
              */
                type: String,
                enum: ['m', 'n', 'f']
            },

            comment: {
                type: String
                max: 400
            }
        }.

        overnight_guests: {
            /*
                Options:
                1 - never
                2 - sometimes
                3 - often
            */
            type: Number,
            min: 1,
            max: 3
        },

        cleanliness: {
            /*
                Options:
                1 - messy
                2 - neat
                3 - extreamely neat
            */
            type: Number,
            min: 1,
            max: 3
        },
    },

    roommate_preferences: {
        smoking: {
            /*
                Options:
                0 - never
                1 - outside
                2 - inside
            */
            type: Number,
            min: 0,
            max: 2
        },

        gender: {
            /*
                Because with sex you can not be more than 1, there is no point to bitmap them, and 1 char takes less space than 1 integer

                Options:
                0 - male
                1 - female
                2 - transgender
                3 - other
                4 - no preference
            */
            type: Number,
            min: 0,
            max: 4
        },

        overnight_guests: {
            /*
                Options:
                0 - never
                1 - sometimes
                2 - often
                3 - no preference
            */
            type: Number,
            min: 0,
            max: 3
        },

        cleanliness: {
            /*
                Options:
                0 - no preference
                1 - messy
                2 - neat
                3 - extreamely neat
            */
            type: Number,
            min: 0,
            max: 3
        },

        number: {
            type: Number,
            min: 0,
            // NOTE There is no reason to not let someone say 50, but to keep it within reason I will say 15, and 15 will count for '15 or more'
            max: 15
        }
    }
});

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
 * Export unitFeaturesSchema
 */

module.exports = unitFeaturesSchema;
