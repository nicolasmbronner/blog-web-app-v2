# 🗺️ ROADMAP - Blog Web App v2

This document outlines the development plan for Blog Web App v2, tracking completed tasks and future development priorities.

## 🏗️ Project Setup

### ✅ Planning & Design
- [x] Plan the application functionality, required routes, and pages
- [x] Create wireframes and mockups
- [x] Collect content and design ideas
- [x] Define project structure and document it in README.md

### ✅ Initial Configuration
- [x] Set up the project repository in VSCode
- [x] Initialize Node.js application and install dependencies (Express.js, EJS)
- [x] Configure Express.js server and define necessary routes
- [x] Create application structure including routes, views, and static files
- [x] Reorganize project according to the structure in README.md
- [x] Set up separate articles file for data management
- [x] Create session management function

## 🧪 Testing

### ✅ Unit Tests
- [x] Configure Jest testing environment
- [x] Implement tests for data layer (articlesStore.js)
- [x] Implement tests for service layer (articleService.js)
- [x] Set up test coverage reporting
- [x] Achieve 100% test coverage for existing modules

## 🚧 Core Features Implementation

### ✅ Recently Completed
- [x] Implement date formatting function that adapts to the device
  - [x] Context-aware formatting (list vs article page)
  - [x] Device-responsive display (desktop/mobile)
  - [x] Time-sensitive formats (today, current year, past years)
  - [x] Integration with article routes and EJS templates
- [x] Create reusable article item partial for displaying articles in lists
- [x] Implement navigation menu with contextual buttons
  - [x] Different buttons based on current page
  - [x] Theme toggle functionality preparation
  - [x] Support for edit/delete actions
- [x] Integrate Font Awesome for UI icons
- [x] Make article titles clickable with links to article detail pages
- [x] Improve date formatting for article detail pages to conditionally show edit date

### 🔄 In Progress
- [ ] **Blog Index Page**: Implement home page showing all available articles
  - [x] Create basic article list structure
  - [x] Set up contextual menu integration
  - [x] Add navigation with clickable titles
  - [x] Configure chronological order for articles (most recent first)
  - [x] Set up 6 pre-existing articles for blog reset
  - [x] Create 404 page for non-existent articles (already deleted by another user)
  - [ ] Implement basic functions for 'new article', 'edit article' and 'delete article' buttons

### 📋 Planned (Backlog)
- [ ] **Article Viewing**: Implement functionality to display articles on their own page
  - [x] Create basic article view template
  - [x] Set up contextual menu integration
  - [x] Implement proper date formatting for creation and update dates
  - [ ] Complete article formatting and layout
  
- [ ] **Article Creation**: Set up article creation functionality
  - [x] Create page navigation structure
  - [x] Configure contextual menu buttons
  - [ ] Implement form for new articles
  - [ ] Handle form submission server-side
  
- [ ] **Article Modification**: Use a form to load existing blog article for editing
  - [ ] Implement save functionality
  - [ ] Add navigation and article interaction buttons
  - [ ] Create edit cancellation function (Gmail-like simple design)
  - [ ] Ensure line breaks are preserved after editing
  
- [ ] **Article Deletion**: Allow user to delete article from the home page or article viewing
  - [ ] Ensure deletion can be undone
  
- [ ] **Reset Functionality**: Ensure articles aren't preserved between sessions

## 🎨 UI/UX Enhancement

- [ ] **Toast Notifications**: Create Gmail-like toast system for:
  - [ ] Canceling article deletion
  - [ ] Canceling article editing
  - [ ] Canceling article creation
  
- [ ] **Article Interactions**: Make article interaction buttons work on index page
  
- [ ] **Styling**: Create CSS file and link to EJS templates
  - [ ] Implement light and dark themes
  - [ ] Use CSS Grid/Flexbox for responsive layout
  
- [ ] **Multi-device Testing**: Ensure style works correctly on different screen sizes and browsers
  - [ ] Verify mouse and touch navigation work properly based on device
  
- [ ] **UI Improvements**:
  - [ ] Add tooltips to all buttons
  - [ ] Create website content with Lorem Ipsum articles
  - [ ] Create well-written article about this project

## 🧪 Testing & Deployment

- [x] **Unit Testing**: Set up and implement tests for core modules
- [ ] **Application Testing**: Verify article creation and viewing work correctly  
- [ ] **Bug Fixing**: Fix any issues that arise during testing
- [ ] **Deployment**: Put the site online
  - [ ] Research best solution for hosting
  - [ ] Prefer local hosting or fast-loading free hosting (avoid 1-2 minute load times)

## 📈 Future Enhancements

- [ ] Enhanced real-time collaboration features
- [ ] Image upload functionality
- [ ] User profiles and comments
- [ ] Article tagging and categorization
- [ ] Search functionality

---

*Last updated: March 05, 2025*