// Middleware that allows to use HTTP methods unsupported by browsers
// like PUT and DELETE through a hidden form field _method on the form
export function methodOverride(req, res, next) {
    console.log('Method override middleware called', {
        originalMethod: req.method,
        body: req.body
    });
    
    if (req.body && req.body._method) {
        console.log(`Overriding method from ${req.method} to ${req.body._method.toUpperCase()}`);
        req.method = req.body._method.toUpperCase();
        delete req.body._method;
    }
    next();
}