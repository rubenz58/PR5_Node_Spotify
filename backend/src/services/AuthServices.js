const JwtServices = require('./JwtServices');

module.exports = {
    login( { email, password }) {
        // Do checks
        if (!email || !password) {
            const error = new Error("invalid user or message");
            error.statusCode = 400;
            throw error;
        }

        // Save user
        // return token and user
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

    signup( { email, password, name }) {
        return null;
    }
}