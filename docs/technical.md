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
│       └── auth.js             # Authentication middleware
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
│       └── websocket.js        # WebSocket client connection
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
  - `dateFormatter.js`: Context-aware date formatting utility that adapts display based on:
    - Display context (article list vs detailed page)
    - Device type (compact formatting for mobile)
    - Temporal context (today, current year, past years)
    - Comparison between creation and update dates to only show relevant information
    - Used by article routes to standardize date presentation
- **Middleware (src/middleware/)**: Request processors
  - `auth.js`: Authentication and authorization checks
- **Views (views/)**: EJS templates for rendering
  - `partials/`: Reusable components
    - `header.ejs`: Common page header with meta tags and CSS
    - `footer.ejs`: Common page footer
    - `menu.ejs`: Contextual navigation menu with dynamic buttons based on current page
    - `article-item.ejs`: Template for rendering article items in lists
  - `pages/`: Main application pages
- **Public**: Static assets
  - `css/`: Stylesheets including theme management
  - `js/`: Client-side interactivity
- **Tests**: Automated testing suite mirroring src structure
  - Tests follow the same structure as the src folder
  - Each module has corresponding unit tests

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
     - Each title is a clickable link to the article detail page
     - Each component receives only the data it needs to render
     - Contextual display decisions happen in the component based on passed variables

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
  - `npm run test:coverage`: Generate coverage reports