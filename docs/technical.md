# Project Architecture

### Detailed Structure
```bash
blog-web-app-v2/
├── src/
│   ├── services/
│   │   └── articleService.js    # Articles management (CRUD)
│   └── utils/
│       └── dateFormatter.js     # Date formatting utilities
├── tests/
│   ├── services/               # Services tests
│   └── utils/                  # Utilities tests
├── public/
│   ├── css/                    # Styles and themes
│   └── js/                     # Client-side scripts
├── views/
│   ├── partials/               # Reusable EJS components
│   └── pages/                  # Main EJS pages
└── docs/                       # Technical documentation
```

### Changelog
- [12/02/2024] : Initial project structure
- [12/02/2024] : Moved articles to articleService.js
- [Date] : [Future changes]

### Code Organization
- **Services (src/services/)**: Contains business logic
  - `articleService.js`: Articles CRUD operations
- **Utils (src/utils/)**: Reusable utility functions
  - `dateFormatter.js`: Date formatting for display
- **Views (views/)**: EJS templates for rendering
  - `partials/`: Reusable components (header, footer)
  - `pages/`: Main application pages