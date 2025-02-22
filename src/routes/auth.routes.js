export function showLogin(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Login - Blog</title>
        </head>
        
        <body>
            <h1>Login Page</h1>
            <script src="/js/websocket.js"></script>
        </body>
        </html>
    `);
}