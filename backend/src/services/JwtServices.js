const jwt = require('jsonwebtoken');

module.exports={
    // functions
    sign(email) {
        return jwt.sign({ email }, process.env.JWT_SECRET, {expiresIn: '1h'} );
    },

    verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}