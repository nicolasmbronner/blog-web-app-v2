# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

<!--
Convention de notation :
- Added: Nouvelle feature, fonction ou dépendance
- Changed: Modification de l'existant (sans le casser)
- Deprecated: Existant marqué comme obsolète, à retirer dans une future version MAJOR
- Removed: Retrait d'une feature, fonction ou dépendance (toujours en version MAJOR)
- Fixed: Correction de bugs ou problèmes (sans changer le comportement attendu)
- Security: Changements liés à la sécurité (vulnérabilités, protection des données)
-->

## [Unreleased]

### Added
- Implementation of article editing functionality (client-side and server-side)
  - Edit button in article list directing to edit form
  - Edit form with pre-populated article data
  - Form submission with article update functionality
- Implementation of article deletion functionality
  - Delete button in article list with immediate visual feedback
  - Server-side deletion with browser compatibility workarounds
  - DOM update without page reload for better user experience
- Client-side JavaScript modules structure with module loading
  - Main.js as coordination point
  - Interactions.js for handling article interactions
- HTTP method override middleware to support PUT/DELETE methods
- Alternative routes for browser compatibility
- Implementation of reverse chronological order for article display (newest first)
- Page context configuration for conditional UI elements display
- Functional navigation setup between home and article creation pages
- Implementation of adaptive date formatting for articles
- Integration of dateFormatter utility in article views
- Device detection for responsive date display formats
- Reorganization of project documentation
- Creation of ROADMAP.md to track development progress
- Implementation of article service layer
- Unit tests with Jest for data and service layers
- Test coverage configuration with 100% coverage achieved
- Enhanced resetArticles function with silent mode parameter
- Created reusable article-item.ejs partial for article lists
- Created menu.ejs partial with contextual navigation buttons
- Integrated Font Awesome for UI icons and buttons
- Added semantic time display with datetime attribute for better accessibility
- Enhanced context variables passing between controllers and views
- Added clickable article titles with links to article detail pages
- Improved date formatting to conditionally display update date only when different from creation date
- Implementation of blog reset functionality when all users disconnect
  - Refactored WebSocket connection handling with proper timer management
  - Delayed reset with cancellation capability when users reconnect
  - Integrated with articlesStore reset function

### Changed
- Improved structure of index.ejs and article.ejs pages
- Updated controllers to pass contextual variables to views (currentPage, articleId)
- Improved template organization with reusable partials
- Enhanced semantic markup with best practices for accessibility (time element)
- Modified dateFormatter.formatForArticle to accept and compare two dates
- Switched from DELETE to POST method for article deletion for browser compatibility
- Enhanced article service functions with more robust error handling
- Refactored WebSocket handling for better timer management and cleaner code organization

### Fixed
- Fixed article deletion functionality to properly remove articles from the in-memory data store
- Fixed reset functionality to prevent multiple resets from occurring simultaneously
- Reduced console verbosity by improving methodOverride middleware logging

## [0.3.0] - 2024-02-21

### Added
- WebSocket login/logout manager implementation
- User connection tracking system
- Blog reset functionality when last user disconnects
- Basic EJS templates structure
- Basic stylesheet implementation
- Static assets loading configuration

## [0.2.0] - 2024-02-15

### Added
- Complete project structure following MVC pattern
- Empty files created for all planned modules
- Route handlers for article management (CRUD operations)
- In-memory data store for articles
- Authentication routes structure
- Middleware architecture

### Changed
- Reorganized project according to documented structure

## [0.1.0] - 2024-02-12

### Added
- Initial project setup
- Express.js server configuration
- MIT License implementation for open-source distribution
- Project documentation structure (README.md)
- Package.json with initial dependencies

### Notes
- This is the initialization of version 2, building upon blog-web-app-v1