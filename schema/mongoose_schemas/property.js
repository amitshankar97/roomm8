const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const communityFeaturesSchema = require('./../sub_documents/community_features');
const includedUtilitiesSchema = require('./../sub_documents/included_utilities');
const unitFeaturesSchema = require('./../sub_documents/unit_features');

var propertySchema = new Schema({
    property_name: {
        type: String,
        required: true
    },

    property_description: {
        type: String,
        max: 5000,
        required: true,
    },

    units: {
        apartment information

        With complexes that have multiple floor-plans it would be best to just have 1 showing for them.
          - within the showing you would then include the information about each size and the associated price.
          - have option for floor-plan

        /*
         * You could have multiple different types of rooms per property, so it should be an array of different sub documents that each contain specific information
         */

        bedroom_count: {
            type: String,
            required: true
        },

        bathroom_count: {
            type: Number,
            required: true
        },

        square_footage: {
            type; Number,
            required: true
        },

        monthly_price: {
            /*
             * TODO : when a current price is entered, use a middleware to move current_price to previous_price
             */
            current_price: {
                type: Number,
                required: true
            },

            previous_price: {
                type: Number,
                required: true
            }
        },
    },


    lease_details: {
        lease_terms: {
            // (sublet... ect)
            // TODO
        },

        lease_duration: {
            /*
             * range example : 6 - 12 months
             * intervals example : 1, 2, 3, 12, 15
             * TODO : we need to be able to delete the other type some how, only one way is allowed.
             * TODO : there needs to be a way to make sure that one of the two is included
             */
            range: {
                minimum: {
                    type: Number,
                    min: 1,
                    max: // TODO has to be less than `maximum value`
                },

                maximum: {
                    type: Number,
                    min: 1,
                    max: // TODO has to be more than `maximum value`
                }
            }

            intervals: [{
                type: Number
            }]
        },

        income_requirement: {
            // Must have 2.5x the rent in total household income (before taxes, include income from all adults)
            type: Number,
            required: true
        }
    }

    location: {
        street: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        zip: {
            type: Number,
            required: true
        },

        coordinates: {
            // TODO : there needs to be a middleware to add this when you add the other information
            longitude: {
                type: Number,
                required: true
            },

            latitude: {
                type: String,
                required: true
            }
        }
    },

    distance_to: {
        // NOTE : with the distance to should it be according to google maps or a radius
        university: {
            // TODO : should be a method or middleware that auto adds the value on creation
            type: Number
        }
    },

    contact: {
        phone_number: {
            type: Number
        },

        email: {
            // NOTE : it should be swaped to type email
            type: String,
        },

        buisness_hours: {
            /*
             * NOTE : the hour we will be using is military time
             * NOTE : it is important to keep continuety, if the open flag is set to 'false', delete the 'opens' and 'closes' fields
             */
            monday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            },

            tuesday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            },

            wednesday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            },

            thursday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            },

            friday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            },

            saturday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            },

            sunday: {
                open: {
                    type: Boolean
                }

                opens: {
                    type: Number
                    min: 0,
                    max: 2400
                }

                closes: {
                    type: Number
                    min: 0,
                    max: 2400
                }
            }
        }
    }

});



pet_policy: {
    limit: {
        type: Number,
        required: false
    },

    restrictions: {
        // example : `agressive Breeds`
        type: String,
        required: false
    },

    details: {
        type: String,
        required: false
    }

    cats: {
        allowed: {
            type: Boolean
            required: false
        },

        deposit: {
            type: Number,
            required: false
        },

        monthly: {
            type: Number,
            required: false
        }
    },

    dogs: {
        allowed: {
            type: Boolean
            required: false
        },

        deposit: {
            type: Number,
            required: false
        },

        monthly: {
            type: Number,
            required: false
        }
    }
},

parking: {
    off_street: {
        encluded: {
            type: Boolean
        }
    },

    on_street: {
        encluded: {
            type: Boolean
        }
    },

    covered: {
        encluded: {
            type: Boolean
        },

        monthly_price: {
            type: Number,
            required: false
        }
    },

    enclosed: {
        encluded: {
            type: Boolean
        },

        monthly_price: {
            type: Number,
            required: false
        }
    }
},

fees: {
    application: {
        type: Number,
        required: false
    },

    deposit: {
        refundable: {
            type: Boolean,
            required: false
        },

        amount: {
            type: Number,
            required: false
        }
    },

    move_in: {
        type: Number,
        required: false
    },

    additional: {
        type: String,
        required: false
    }
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
