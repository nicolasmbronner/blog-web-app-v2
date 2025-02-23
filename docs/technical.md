# Project Architecture

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
│   ├── routes/
│   │   └── articles.routes.test.js
│   ├── services/
│   │   └── articleService.test.js
│   └── utils/
│       └── dateFormatter.test.js
├── public/
│   ├── css/
│   │   └── styles.css          # Themes and styles
│   └── js/
│       └── main.js             # Client-side JavaScript
├── views/
│   ├── partials/
│   │   ├── header.ejs          # Reusable header with theme toggle
│   │   └── footer.ejs          # Reusable footer
│   └── pages/
│       ├── login.ejs           # Login page
│       ├── index.ejs           # Articles list page
│       ├── article.ejs         # Article reading page
│       ├── edit.ejs            # Article editing page
│       ├── new.ejs             # New article page
│       └── 404.ejs             # Error page
├── docs/                       # Technical documentation
│   └── planification.md
│   └── technical.md
├── index.js                    # Application entry point
└── package.json                # Project dependencies and scripts
```

### Changelog
- [21/02/2024] : WebSocket login/logout manager, EJS & stylesheet basics, statics loading
- [15/02/2024] : Project structure and files (empty) created
- [15/02/2024] : Added routes, data store, and middleware architecture
- [12/02/2024] : Project starting day

### Code Organization
- **Routes (src/routes/)**: Request handlers
  - `auth.routes.js`: Authentication related routes
  - `articles.routes.js`: Article management routes
- **Data (src/data/)**: Data storage
  - `articlesStore.js`: In-memory articles storage
- **Services (src/services/)**: Contains business logic
  - `articleService.js`: Articles CRUD operations
- **Utils (src/utils/)**: Reusable utility functions
  - `dateFormatter.js`: Date formatting for display
- **Middleware (src/middleware/)**: Request processors
  - `auth.js`: Authentication and authorization checks
- **Views (views/)**: EJS templates for rendering
  - `partials/`: Reusable components (header, footer)
  - `pages/`: Main application pages
- **Public**: Static assets
  - `css/`: Stylesheets including theme management
  - `js/`: Client-side interactivity
- **Tests**: Automated testing suite mirroring src structure