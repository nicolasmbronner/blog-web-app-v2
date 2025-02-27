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
- Reorganization of project documentation
- Creation of ROADMAP.md to track development progress
- Implementation of article service layer
- Unit tests with Jest for data and service layers
- Test coverage configuration with 100% coverage achieved
- Enhanced resetArticles function with silent mode parameter

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