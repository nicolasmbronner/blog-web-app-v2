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
- [x] Implement article editing functionality
  - [x] Edit button in article list redirecting to edit form
  - [x] Edit form with pre-populated article data
  - [x] Form submission with article update
- [x] Implement article deletion functionality
  - [x] Delete button in article list with immediate visual feedback
  - [x] Server-side deletion with DOM update (no page reload)
  - [x] Alternative route implementation for browser compatibility
- [x] Create modular JavaScript architecture
  - [x] Main.js as entry point
  - [x] Interactions.js for article interactions
  - [x] Module loading with ES6 import/export
- [x] Implementation of date formatting function that adapts to the device
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
- [ ] **Toast Notifications System**: Implement Gmail-like toast system
  - [ ] Create notification system when articles are deleted
  - [ ] Add undo functionality for deleted articles
  - [ ] Add notification appearance/disappearance animations
  - [ ] Implement timed auto-dismiss with progress indicator

### 📋 Planned (Backlog)
- [ ] **Article Creation**: Complete article creation functionality
  - [x] Create page navigation structure
  - [x] Configure contextual menu buttons
  - [ ] Implement form for new articles with validation
  - [ ] Handle form submission server-side
  - [ ] Add toast notification for cancel action
  
- [ ] **UI Enhancements**: Improve article interaction feedback
  - [ ] Add animation for article deletion in list
  - [ ] Implement touch swipe gestures for mobile devices
  - [ ] Add article hover effects on desktop
  
- [ ] **Reset Functionality**: Ensure articles aren't preserved between sessions
  - [ ] Complete WebSocket implementation for tracking users
  - [ ] Implement proper reset when last user disconnects
  
- [ ] **Styling**: Complete CSS implementation
  - [ ] Implement light and dark themes
  - [ ] Complete responsive layout for all device sizes
  - [ ] Style article forms for better user experience

## 🎨 UI/UX Enhancement

- [ ] **Touch Gestures**: Implement swipe interactions for mobile devices
  - [ ] Swipe left to delete articles
  - [ ] Swipe right to edit articles
  - [ ] Add visual indicators during swipe
  
- [ ] **Article Interactions**: Enhance desktop interactions
  - [ ] Add hover animations for article items
  - [ ] Improve button visibility and feedback
  
- [ ] **Styling**: Complete CSS styling across all pages
  - [ ] Implement light and dark themes
  - [ ] Use CSS Grid/Flexbox for responsive layout
  - [ ] Create consistent styling across all pages
  
- [ ] **Multi-device Testing**: Ensure style works correctly on different screen sizes and browsers
  - [ ] Verify mouse and touch navigation work properly based on device
  
- [ ] **UI Improvements**:
  - [ ] Add tooltips to all buttons
  - [ ] Create website content with Lorem Ipsum articles
  - [ ] Create well-written article about this project

## 🧪 Testing & Deployment

- [x] **Unit Testing**: Set up and implement tests for core modules
- [ ] **Application Testing**: Verify article creation and viewing work correctly  
- [ ] **Browser Compatibility**: Test on different browsers
- [ ] **Bug Fixing**: Fix any issues that arise during testing
- [ ] **Deployment**: Put the site online
  - [ ] Research best solution for hosting
  - [ ] Prefer local hosting or fast-loading free hosting

## 📈 Future Enhancements

- [ ] Enhanced real-time collaboration features
- [ ] Image upload functionality
- [ ] User profiles and comments
- [ ] Article tagging and categorization
- [ ] Search functionality
- [ ] Replace current DELETE workaround with proper implementation
  - [ ] Investigate browser redirect issues with DELETE requests
  - [ ] Consider implementing a more robust client-side framework

---

*Last updated: March 10, 2025*