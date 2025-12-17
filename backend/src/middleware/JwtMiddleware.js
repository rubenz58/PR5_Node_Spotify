const JwtServices = require('../services/JwtServices');

module.exports = {
    
    verify(req, res, next) {
        // Decode token from header etc.
        const authToken = req.headers.authorization;

        if (!authToken) {
            return res.status(400).json({ error: "Token header is required" });
        }

        const token = authToken.startsWith("Bearer ")
            ? authToken.slice(7)
            : authToken;
        
        try {
            const decoded = JwtServices.verify(token);
            req.user = decoded;
            next();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}