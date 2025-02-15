# Project Architecture

### Detailed Structure
```bash
blog-web-app-v2/
├── src/
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── articles.routes.js
│   ├── data/
│   │   └── articlesStore.js     # "Base de données" en mémoire
│   ├── services/
│   │   └── articleService.js    # Logique métier des articles (CRUD)
│   ├── utils/
│   │   └── dateFormatter.js     # Formatage des dates
│   └── middleware/
│       └── auth.js              # Middleware d'authentification
├── tests/
│   ├── routes/
│   │   └── articles.routes.test.js
│   ├── services/
│   │   └── articleService.test.js
│   └── utils/
│       └── dateFormatter.test.js
├── public/
│   ├── css/
│   │   └── styles.css          # Styles et thèmes
│   └── js/
│       └── main.js             # Scripts côté client
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── login.ejs
│       ├── index.ejs
│       ├── article.ejs
│       ├── edit.ejs
│       ├── new.ejs
│       └── 404.ejs
├── docs/                       # Documentation technique
├── index.js                    # Point d'entrée de l'application
└── package.json
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