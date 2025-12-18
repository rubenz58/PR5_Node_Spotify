const express = require('express');
const AuthRouter = express.Router();
const JwtMiddleware = require('../middleware/JwtMiddleware');
const AuthController = require('../controllers/AuthController');

AuthRouter.get('/health', (req, res) => {
    return res.json({ AuthRouter: "working "});
});
AuthRouter.post('/login', AuthController.login);
AuthRouter.post('/signup', AuthController.signup);
AuthRouter.post('/logout', AuthController.logout);
AuthRouter.get('/me', JwtMiddleware.verify, AuthController.me);

module.exports = AuthRouter;