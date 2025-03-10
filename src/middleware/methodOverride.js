// Middleware that allows to use HTTP methods unsupported by browsers
// like PUT and DELETE through a hidden form field _method on the form
export function methodOverride(req, res, next) {
    if (req.body && req.body._method) {
        // Replace HTTP method with _method
        req.method = req.body._method.toUpperCase();
        // Delete _method for not interfere with the rest of the request
        delete req.body._method;
    }
    next();
}