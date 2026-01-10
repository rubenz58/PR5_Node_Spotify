const AuthServices = require('../services/AuthServices');

module.exports = {
    async login(req, res) {
        try {
            const result = await AuthServices.login(req.body);
            return res.json({
                message: "User logged in successfully",
                ...result
            });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async signup(req, res) {
        try {
            const result = await AuthServices.signup(req.body);
            return res.status(201).json({
                message: "User created successfully",
                ...result
            });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    logout() {
        return res.json({ route: "/logout"});
    },

    me(req, res) {
        try {
            const result = AuthServices.getUser(req.user)
            return res.json(result);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}