/**
 * interactions.js - Article interactions management
 * 
 * This module handles all user interactions with articles:
 * - Clicks on edit and delete buttons
 * - Management of creation and editing forms
 * - Data formatting and validation
 */

// Initialization function called when document loads
export function initInteractions() {
    // Initialize event handlers for articles
    initArticleButtons();
}

// Initialize handlers for article action buttons
function initArticleButtons() {
    // Select all articles in the list
    const articleItems = document.querySelectorAll('.article-item');
    
    articleItems.forEach(article => {
        // Select edit and delete buttons
        const editButtons = article.querySelectorAll('[data-action="edit"]');
        const deleteButtons = article.querySelectorAll('[data-action="delete"]');
        
        // Get article ID using getAttribute
        const articleId = article.getAttribute('data-id');
        
        // Add event handlers to edit buttons
        editButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (articleId) {
                    handleEditArticle(articleId);
                } else {
                    console.error('Edit failed: Article ID not found');
                }
            });
        });
        
        // Add event handlers to delete buttons
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (articleId) {
                    handleDeleteArticle(articleId, article);
                } else {
                    console.error('Delete failed: Article ID not found');
                }
            });
        });
    });
}

// Handle click on edit button
function handleEditArticle(articleId) {
    // Redirect to edit page
    window.location.href = `/articles/${articleId}/edit`;
}

// Handle click on delete button
function handleDeleteArticle(articleId, articleElement) {
    console.log('Deleting article with ID:', articleId);

    // NOTE: We're using POST instead of DELETE for better browser compatibility.
    // The standard REST approach would be to use DELETE, but we encountered issues
    // with browser redirections. This implementation provides the same functionality
    // while ensuring cross-browser support. In a future implementation with more
    // advanced frameworks, we could switch back to proper DELETE methods.
    
    // Using POST instead of DELETE
    fetch(`/articles/${articleId}/remove`, {
        method: 'POST'
    })
    .then(response => {
        console.log('Delete response:', response);
        if (response.ok) {
            // if delete was successful, delete element from the DOM
            articleElement.remove();
            console.log('Article successfully deleted');
        } else {
            console.error('Error deleting article');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}