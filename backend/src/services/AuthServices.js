const { User } = require('../../models');
const bcrypt = require('bcrypt');

const JwtServices = require('./JwtServices');

module.exports = {
    async login({ email, password }) {
        // Do checks
        if (!email || !password) {
            const error = new Error("invalid user or message");
            error.statusCode = 400;
            throw error;
        }

        const user = await User.findOne({ where: { email }});

        if(!user) {
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            throw error;
        }

        const isValidPassword = await bcrypt.compare(password, user.passwordHash);

        if (!isValidPassword) {
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            throw error;
        }

        const token = JwtServices.sign(email);

        try {
            return {
                token,
                user
            };
        } catch (err) {
            return err;
        }
    },

    async signup({ email, password, name }) {

        // Do checks
        if (!email || !password || !name) {
            const error = new Error("invalid user or message");
            error.statusCode = 400;
            throw error;
        }

        try {
            const passwordHash = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                email,
                name,
                passwordHash
            });

            const token = JwtServices.sign(newUser.id);

            return {
                token,
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    name: newUser.name
                }
            };

        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                const error = new Error("User with this email or name already exists");
                error.statusCode = 409;
                throw error;
            }
            throw err;
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