const express = require('express');
require('dotenv').config();
const app = express();

const AuthRouter = require('./routes/AuthRoutes');
const LoggingMiddleware = require('./middleware/LoggingMiddleware');

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(LoggingMiddleware);
app.use('/api/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port: http://localhost: ${PORT}`);
});