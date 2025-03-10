/**
 * main.js - Main JavaScript entry point
 * 
 * This file coordinates the different application modules,
 * initializes features and manages global interactions.
 * 
 * Imported modules:
 * 
 * - interactions.js: Handles all user interactions with articles
 *   * Touch swipe for edit/delete
 *   * Click handling for action buttons
 *   * Contextual display/hiding of buttons based on device
 * 
 * - notifications.js: Toast notification system
 *   * Creation and display of toast notifications
 *   * Undo action management
 *   * Toast animations and queue management
 * 
 * - responsive.js: Adaptations for different devices
 *   * Device type detection (desktop/touch)
 *   * Interaction adjustments based on context
 *   * Touch-specific modifications
 * 
 * - theme.js: Visual theme management
 *   * Toggle between light/dark modes
 *   * Theme choice persistence
 *   * Theme initialization at loading
 */

// Imports
import { initInteractions } from './modules/interactions.js';
// Other modules will be imported later
// import { initNotifications } from './modules/notifications.js';
// import { initResponsive } from './modules/responsive.js';
// import { initTheme } from './modules/theme.js';

// Initialize application when document loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize article interactions
    initInteractions();
    
    // Other modules will be initialized later
    // initNotifications();
    // initResponsive();
    // initTheme();
});