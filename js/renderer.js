/* =====================================================================
    RENDERER (renderer.js)
    This file contains functions that generate HTML from data.
=====================================================================*/

/**
 * Creates the HTML string for a single template card.
 * @param {object} template - A template object from templates.js.
 * @returns {string} - The HTML for the card.
 */
function createTemplateCard(template) {
    return `
    <div class="card">
        <div class="card-image-container">
            <img src="${template.image}" alt="Preview of ${template.title}" class="card-image">
        </div>
        <div class="card-content">
            <h3 class="card-title">${template.title}</h3>
            <p class="card-description">${template.description}</p>
            <div class="card-meta">
                <span class="tag">${template.category}</span>
                <span class="tag">${template.difficulty}</span>
            </div>
            <a href="template-detail.html?id=${template.id}" class="btn btn-primary card-button">View Details</a>
        </div>
    </div>
  `;
}

/**
 * Renders an array of template objects into a target DOM container.
 * @param {Array<object>} templatesArray - The array of templates to display.
 * @param {HTMLElement} container - The DOM element to populate.
 */
export function renderTemplateCards(templatesArray, container) {
    // Clear any previous content (like "Loading...")
    container.innerHTML = "";

    if (templatesArray.length === 0) {
        container.innerHTML = '<p class="no-results">No templates found matching your criteria.</p>';
        return;
    }

    // Create all card HTML and append it to the container
    const allCardsHtml = templatesArray.map(createTemplateCard).join("");
    container.innerHTML = allCardsHtml;
}

/* =====================================================================
    NEW CODE FOR COMPONENTS - ADD EVERYTHING BELOW THIS LINE
=====================================================================*/

/**
 * Creates the HTML string for a single component card.
 * @param {object} component - A component object from components.js.
 * @returns {string} - The HTML for the card.
 */
function createComponentCard(component) {
    return `
    <div class="card">
        <div class="card-image-container">
            <img src="${component.image}" alt="Preview of ${component.title}" class="card-image">
        </div>
        <div class="card-content">
            <h3 class="card-title">${component.title}</h3>
            <p class="card-description">${component.description}</p>
            <div class="card-meta">
                <span class="tag">${component.category}</span>
            </div>
            <!-- Components might not have a "details" page, so this can be a placeholder -->
            <a href="#" class="btn btn-primary card-button" onclick="alert('Viewing details for ${component.title}')">View Code</a>
        </div>
    </div>
  `;
}

/**
 * Renders an array of component objects into a target DOM container.
 * @param {Array<object>} componentsArray - The array of components to display.
 * @param {HTMLElement} container - The DOM element to populate.
 */
export function renderComponentCards(componentsArray, container) {
    container.innerHTML = "";

    if (componentsArray.length === 0) {
        container.innerHTML = '<p class="no-results">No components found matching your criteria.</p>';
        return;
    }

    const allCardsHtml = componentsArray.map(createComponentCard).join("");
    container.innerHTML = allCardsHtml;
}