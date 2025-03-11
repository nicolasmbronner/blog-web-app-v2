// =====================================
// Imports
// =====================================
import express            from 'express';
import device             from 'express-device';
import bodyParser         from 'body-parser';
import { WebSocketServer} from 'ws';
import { createServer }   from 'http';
import { methodOverride}  from './src/middleware/methodOverride.js';

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

// Keep track of connected users and reset timer
let connectedUsers = 0;
let resetTimer = null;

// Function to cancel any scheduled reset
function cancelScheduledReset() {
    if (resetTimer !== null) {
        console.log('Cancelling scheduled blog reset');
        clearTimeout(resetTimer);
        resetTimer = null;
    }
}

// Function to schedule a blog reset
function scheduleBlogReset(delayInMs = 15000) {
    // Cancel any existing timer first
    cancelScheduledReset();
    
    console.log(`No users left. Waiting ${delayInMs/1000} seconds before resetting...`);
    
    // Create a new timer
    resetTimer = setTimeout(() => {
        // Double-check that no users reconnected
        if (connectedUsers === 0) {
            console.log('Blog resetting to default state...');
            
            // Import and call the reset function
            import('./src/data/articlesStore.js')
                .then(module => {
                    module.resetArticles(false);
                    console.log('Blog has been reset successfully');
                })
                .catch(err => console.error('Error resetting articles:', err));
        } else {
            console.log(`Reset canceled: ${connectedUsers} users connected`);
        }
        
        // Clear the timer reference
        resetTimer = null;
    }, delayInMs);
}

// WebSocket connection handling
wss.on('connection', (ws) => {
    // Increment counter when user connects
    connectedUsers++;
    console.log(`New user connected! Current users: ${connectedUsers}`);
    
    // Cancel any pending reset since we have an active user
    cancelScheduledReset();

    // Handle disconnection and decrement counter
    ws.on('close', () => {
        connectedUsers--;
        console.log(`User disconnected. Current users: ${connectedUsers}`);

        // If no users are left, schedule a blog reset
        if (connectedUsers === 0) {
            scheduleBlogReset();
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

// Middleware to allow HTTP methods (PUT, DELETE) unsupported by browsers
app.use(methodOverride);

// Configure view engine
app.set('view engine', 'ejs');

// Configure device detection middleware
app.use(device.capture());


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

// Alternative routes for DELETE operations due to browser limitations
app.get('/articles/:id/delete', articleRoutes.deleteArticle); // For debugging/testing only
app.post('/articles/:id/remove', articleRoutes.deleteArticle); // Primary alternative to DELETE

// POST, PUT, DELETE - Data modifications
app.post('/articles/', articleRoutes.createArticle);
app.put('/articles/:id', articleRoutes.updateArticle);
app.delete('/articles/:id', articleRoutes.deleteArticle); // Kept for API completeness but not used by browser UI


// =====================================
// Server Initialization
// =====================================
server.listen(port, () => {
    console.log('Blog server initialized');
    console.log(`Listening to port ${port}`);
});