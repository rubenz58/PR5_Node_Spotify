const express = require('express');
const app = express();

const AuthRouter = require('./routes/AuthRoutes');
const LoggingMiddleware = require('./middleware/LoggingMiddleware');

app.use(express.json());

app.use(LoggingMiddleware);
app.use('/api/auth', AuthRouter);

module.exports = app;