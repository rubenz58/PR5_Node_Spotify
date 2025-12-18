const JwtServices = require('./JwtServices');

module.exports = {
    login({ email, password }) {
        // Do checks
        if (!email || !password) {
            const error = new Error("invalid user or message");
            error.statusCode = 400;
            throw error;
        }

        // Get user based on email
        // Check password against hashed password.
        const user = {
            email
        };

        try {
            const token = JwtServices.sign(email);
            return {
                token,
                user
            };
        } catch (err) {
            return err;
        }
    },

    signup({ email, password, name }) {

        // Do checks
        if (!email || !password || !name) {
            const error = new Error("invalid user or message");
            error.statusCode = 400;
            throw error;
        }

        // Check if the email already exists in the db.
        // Hash password, create new User

        // Get user based on email
        // Check password against hashed password.
        const user = {
            email
        };

        try {
            const token = JwtServices.sign(email);
            return {
                token,
                user
            };
        } catch (err) {
            return err;
        }
    },

    getUser( user ) {
        const { email } = user;
        console.log("getUser: ", email);
        // get user from DB using email
        return {
            user: email
        };
    }
}