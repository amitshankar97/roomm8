# Account creation
    - to create a profile it should be the lowest barrier of entry :
        - REQUIRED :
            * First name, Last name
            * School Email
            * Password
    - to use the service and to see anything you should have to authenticate the email for protection of the users
    - when a user goes to create an account it should generate a **`temp_user`**, and after the user has followed the validation link then allow the user to view the website

# temp_user Specification
    - there needs to be a `time to live` of the temp account for 30 days and then delete the user
    - when creating the user you must guarantee that the email is unique in the `temp_user collection` and the `user collecting`

# Password recovery
    - when the user forgets password generate a `safe` temporary recovery url that the user can follow and then it automatically signs them in but then forces them to reset the password first
    - the `url` that will be used for the recovery will be stored into a `temporary database`
    - `http://www.website.com/account/reset/:resetURL`
    - Example : - `http://www.website.com/account/reset/hj789sd987d987dsugkblsa78d6sa5dsad7as86`
    - `time to live` should be 10 minutes (I don't know exact time) that way if a user does manage to have his email breached that does not mean that he will loose his account
    - it does not matter if the user logs i while there is an outstanding `recovery URL`

    **there is always a possibility to later add a secondary form of validation when recovering using a cell phone number, and then you generate a `key` that is sent to the phone and save it with the other information in the recovery file**
