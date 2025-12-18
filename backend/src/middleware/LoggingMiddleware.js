module.exports = (req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    console.log(`Body:`, req.body);
    console.log(`Query:`, req.query);
    console.log(`Headers:`, req.headers);
    console.log('------------------------');
    next();
};