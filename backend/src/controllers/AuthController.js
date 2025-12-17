const AuthServices = require('../services/AuthServices');

module.exports = {
    login(req, res) {
        console.log("//login");
        console.log("req.body", req.body);
        try {
            const result = AuthServices.login(req.body);
            return res.json({
                message: "User logged in successfully",
                ...result
            });
        } catch (err) {
            // read error messages.
            return res.status(400).json({ error: err.message });
        }
    },

    signup(req, res) {
        try {
            const result = AuthServices.signup(req.body);
            return res.status(201).json({ result });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    logout() {
        return res.json({ route: "/logout"});
    },

    me() {
        return res.json({ route: "/me"});
    }
}