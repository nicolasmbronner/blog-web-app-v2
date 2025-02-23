// =====================================
// Imports
// =====================================
import express            from 'express';
import bodyParser         from 'body-parser';
import { WebSocketServer} from 'ws';
import { createServer }   from 'http';

import { showLogin }      from './src/routes/auth.routes.js';
import * as articleRoutes from './src/routes/articles.routes.js';


// =====================================
// Express Configuration
// =====================================
const app = express();
const port = 3000;

// Create HTTP server
const server = createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Keep track of connected users to the server
let connectedUsers = 0;

// WebSocket connection handling
wss.on('connection', (ws) => {
    // Increment counter when user connects
    connectedUsers++;
    console.log(`New user connected! Current users: ${connectedUsers}`);

    // Handle disconnection and decrement counter
    ws.on('close', () => {
        connectedUsers--;
        console.log(`User disconnected. Current users: ${connectedUsers}`);

        // Check if no users left and reset blog
        if (connectedUsers === 0) {
            console.log(`No users left. Blog resetting to default state...`);
            // TODO : Implement blog reset
        }
    });
});


// =====================================
// Middleware
// =====================================
// Serve static files (CSS, JS, images) from the public directory
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }))

// Configure view engine
app.set('view engine', 'ejs');


// =====================================
// Authentication Routes
// =====================================
app.get('/login', showLogin);


// =====================================
// Article Routes
// =====================================
// The order of routes is important: specific routes must come before
// parametric onse to avoid /new being treated as an :id parameter

// GET - Page display
app.get('/', articleRoutes.listArticles);
app.get('/articles/new', articleRoutes.showNewArticleForm);
app.get('/articles/:id/edit', articleRoutes.showEditArticleForm);
app.get('/articles/:id', articleRoutes.getArticle);

// POST, PUT, DELETE - Data modifications
app.post('/articles/', articleRoutes.createArticle);
app.put('/articles/:id', articleRoutes.updateArticle);
app.delete('/articles/:id', articleRoutes.deleteArticle);


// =====================================
// Server Initialization
// =====================================
server.listen(port, () => {
    console.log('Blog server initialized');
    console.log(`Listening to port ${port}`);
});