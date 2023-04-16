function errorHandler(err, req, res, next) {
    console.log('going through error handler');
    if (err) {
        console.log('errorHandler', err);
        if (err.name === 'MyCustomError') {
            return res.status(400).send(err.message);
        }
        if (err.name === 'AuthenticationError') {
            return res.status(401).send('Authentication failed');
        }
        // Add more error types and their corresponding HTTP status codes and error messages here
        return res.status(500).send('Server error');
    }
    next();
}
module.exports = errorHandler;
//# sourceMappingURL=error-handler.js.map