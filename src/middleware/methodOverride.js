/**
 * methodOverride.js - Middleware for supporting HTTP methods beyond GET/POST
 *
 * This middleware allows forms to use HTTP methods other than GET/POST (like PUT, DELETE)
 * which are not natively supported by HTML forms. It works by detecting a special '_method'
 * field in the request body and using its value to override the actual HTTP method.
 *
 * Currently configured but not fully utilized with browser-initiated DELETE operations
 * due to compatibility issues. Instead, we're using alternative POST routes with
 * specific paths (e.g., /articles/:id/remove). This middleware is kept for:
 * 
 * 1. Future implementation with more sophisticated client-side code
 * 2. Supporting the PUT method for article updates
 * 3. Potential API access where DELETE would be used directly
 */

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