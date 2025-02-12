# Architecture du Projet

### Structure Détaillée
```bash
blog-web-app-v2/
├── src/
│   ├── services/
│   │   └── articleService.js    # Gestion des articles (CRUD)
│   └── utils/
│       └── dateFormatter.js     # Formatage des dates
├── tests/
│   ├── services/               # Tests des services
│   └── utils/                  # Tests des utilitaires
├── public/
│   ├── css/                    # Styles et thèmes
│   └── js/                     # Scripts côté client
├── views/
│   ├── partials/               # Composants EJS réutilisables
│   └── pages/                  # Pages principales EJS
└── docs/                       # Documentation technique
```

### Journal des Modifications
- [12/02/2024] : Structure initiale du projet
- [12/02/2024] : Séparation des articles dans articleService.js
- [Date] : [Future modification]

### Organisation du Code
- **Services (src/services/)**: Contient la logique métier
  - `articleService.js`: Gestion du CRUD des articles
- **Utils (src/utils/)**: Fonctions utilitaires réutilisables
  - `dateFormatter.js`: Formatage des dates pour l'affichage
- **Vues (views/)**: Templates EJS pour le rendu
  - `partials/`: Composants réutilisables (header, footer)
  - `pages/`: Pages principales de l'application