/*
https://`website`.`url`/verifyEmail?t=`48 characters a-z 0-9`&e=`user's email encoded`

URL Parameters :
    't' - token, 48 characters a-z 0-9
    'e' - email, user's email encoded

ex: https://webflow.com/verifyEmail?t=16dc289c572774ad2affdf714aa3d86a&e=alexanderfrenette%40icloud.com
*/

var 

app.post('user/signup', userSignUp);

function userSignUp(){
    // user sign up

    // parse the url out

    var email = ...;

    // check the persistant accounts
    if (inPersistantAccounts == true || inInactiveAccounts == true) {
        // send an error message saying account already exists, redirect
    } else if (inTempAcounts == true) {
        /*
         * the account needs to be verified
         * prompt with option to resend verification email
         */

    } else {
        /*
         * the account does not exist
         * create a new model with mongoose, and then insert the tempUser
         */

         var password = ...;
         // deal with user password salting it or what have you, maybe lookinto 'passport local'


         //

         if (errorInserting) {
             // redirect with error message
         } else {
             // user was inserted, redirect to account successfully created, now please check your email to verify the acount
         }
    }
};
