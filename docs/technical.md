# Technical Documentation

## Project Architecture

### Detailed Structure
```bash
blog-web-app-v2/
├── src/
│   ├── routes/
│   │   ├── auth.routes.js      # Authentication routes
│   │   └── articles.routes.js  # Article management routes
│   ├── data/
│   │   └── articlesStore.js    # In-memory data store
│   ├── services/
│   │   └── articleService.js   # Articles business logic
│   ├── utils/
│   │   └── dateFormatter.js    # Date formatting utilities
│   └── middleware/
│       ├── auth.js             # Authentication middleware
│       └── methodOverride.js   # HTTP method override for PUT/DELETE
├── tests/
│   ├── data/
│   │   └── articlesStore.test.js  # Tests for articles data store
│   ├── services/
│   │   └── articleService.test.js # Tests for article service
│   ├── routes/
│   │   └── articles.routes.test.js
│   └── utils/
│       └── dateFormatter.test.js
├── public/
│   ├── css/
│   │   └── styles.css          # Themes and styles
│   └── js/
│       ├── main.js             # Client-side JavaScript
│       ├── websocket.js        # WebSocket client connection
│       └── modules/
│           ├── interactions.js # Article interactions handling
│           ├── notifications.js # Toast notification system
│           ├── responsive.js   # Device-specific adaptations
│           └── theme.js        # Theme switching functionality
├── views/
│   ├── partials/
│   │   ├── header.ejs          # Reusable header with theme toggle
│   │   ├── footer.ejs          # Reusable footer
│   │   ├── menu.ejs            # Contextual navigation menu
│   │   └── article-item.ejs    # Article list item template
│   └── pages/
│       ├── login.ejs           # Login page
│       ├── index.ejs           # Articles list page
│       ├── article.ejs         # Article reading page
│       ├── edit.ejs            # Article editing page
│       ├── new.ejs             # New article page
│       └── 404.ejs             # Error page
├── docs/                       # Technical documentation
│   └── PLANNING_NOTES_FR.md    # Planning notes in French
│   └── TECHNICAL.md            # Technical documentation
│   └── USER_GUIDE.md           # User documentation
├── index.js                    # Application entry point
├── jest.config.js              # Jest testing configuration
├── ROADMAP.md                  # Development roadmap
├── CHANGELOG.md                # Version history
└── package.json                # Project dependencies and scripts
```

> **Note**: For a complete version history, please refer to [CHANGELOG.md](../CHANGELOG.md) in the project root.

### Code Organization
- **Routes (src/routes/)**: Request handlers
  - `auth.routes.js`: Authentication related routes
  - `articles.routes.js`: Article management routes
- **Data (src/data/)**: Data storage
  - `articlesStore.js`: In-memory articles storage
- **Services (src/services/)**: Contains business logic
  - `articleService.js`: Articles CRUD operations
- **Utils (src/utils/)**: Reusable utility functions
  - `dateFormatter.js`: Context-aware date formatting utility
- **Middleware (src/middleware/)**: Request processors
  - `auth.js`: Authentication and authorization checks
  - `methodOverride.js`: HTTP method override support for forms
- **Views (views/)**: EJS templates for rendering
  - `partials/`: Reusable components
  - `pages/`: Main application pages
- **Public**: Static assets
  - `css/`: Stylesheets including theme management
  - `js/`: Client-side interactivity
    - `modules/`: Modular JavaScript functionality
      - `interactions.js`: Article interactions handling
- **Tests**: Automated testing suite mirroring src structure

### Real-time Features & State Management

The application uses WebSockets to provide real-time state management:

1. **User Tracking**:
   - Each connected browser maintains a WebSocket connection
   - The server keeps track of the number of active connections
   - When connections reach zero, the blog resets to default state after a delay

2. **WebSocket Architecture**:
   - `index.js`: Sets up WebSocket server (wss) and manages connection state
   - `public/js/websocket.js`: Client-side connector that establishes connection
   - Connection/disconnection events increment/decrement the user counter

3. **Blog Reset Mechanism**:
   - When the last user disconnects, a timer is started (15 seconds by default)
   - If a new user connects before the timer expires, the reset is cancelled
   - If no users reconnect, the blog returns to its default state
   - Timer management uses a cancelable timeout pattern to prevent race conditions
   - The `resetArticles` function from articlesStore.js resets all article data

### REST API & Browser Compatibility

The application follows RESTful principles with some practical adaptations for browser compatibility:

1. **Standard REST Routes**:
   - `GET /articles`: List articles
   - `POST /articles`: Create article
   - `GET /articles/:id`: View article
   - `PUT /articles/:id`: Update article
   - `DELETE /articles/:id`: Delete article

2. **Browser Compatibility Adaptations**:
   - `GET /articles/:id/edit`: Show edit form (separate from PUT operation)
   - `POST /articles/:id/remove`: Alternative to DELETE for better browser support

3. **HTTP Method Support**:
   - The `methodOverride` middleware enables HTML forms to use PUT/DELETE methods
   - For client-side JavaScript, alternative POST routes are used instead of DELETE
     due to browser compatibility and redirect handling issues

### Client-Side Architecture

The front-end JavaScript is organized in a modular pattern:

1. **Main Entry Point**: `main.js` coordinates all modules
2. **Module Structure**:
   - `interactions.js`: Handles all article interactions (edit/delete buttons)
   - Future modules: notifications.js, responsive.js, theme.js
3. **Event Binding**:
   - Events are bound at page load through the `initInteractions()` function
   - Uses event delegation where appropriate
4. **DOM Updates**:
   - Article deletion is handled client-side without page reload
   - DOM elements are removed after successful server operations

### Form Handling

1. **Edit Form**:
   - Uses `_method` hidden field to simulate PUT requests
   - Pre-populates with article data
   - Redirects to article view after successful update

2. **Method Override**:
   - The `methodOverride` middleware detects the `_method` parameter
   - Changes the HTTP method accordingly for server-side processing

### Template Structure and Strategy
The application uses EJS templating with a component-based approach:

1. **Base Layout**
   - `header.ejs` and `footer.ejs` provide the basic page structure
   - Meta tags, CSS imports, and common scripts are included in the header

2. **Navigation System**
   - `menu.ejs` provides a contextual navigation system that displays different buttons based on:
     - Current page (`currentPage` variable)
     - User authentication status (`isLoggedIn` variable)
     - Author status for articles (`isAuthor` variable)
   - Different action buttons:
     - Back navigation: Handles different return behaviors (simple return or with cancellation toasts)
     - Theme toggle: Present on all pages
     - Action buttons: Edit, delete, create, etc. based on context

3. **Reusable Components**
   - `article-item.ejs` represents a single article in list views
     - Each article includes edit/delete buttons
     - Buttons trigger JavaScript actions without page reload

4. **Data Flow**
   - Controllers prepare all necessary data before rendering
   - View templates focus on presentation logic only
   - Context variables (currentPage, articleId, etc.) control template behavior

### Testing Architecture
- **Test Framework**: Jest with ES modules support
- **Test Organization**: Tests mirror the src directory structure
- **Coverage**: 100% coverage for data and service layers
- **Testing Patterns**: 
  - Tests follow Arrange-Act-Assert pattern
  - BeforeEach hooks for test isolation
  - Comprehensive case coverage including edge cases
- **Running Tests**:
  - `npm test`: Run all tests
  - `npm run test:coverage`: Generate coverage repor