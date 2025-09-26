/* =====================================================================
    [ MASTER SCRIPT - V3 UNIFIED ]
    This is the complete, unified script with all features.
    It should be loaded on EVERY page.
===================================================================== */

import { templates } from "./templates.js";
import { components } from "./components.js";
import { renderTemplateCards, renderComponentCards } from "./renderer.js";

// --- UTILITY: A function to run code only on a specific page ---
function onPage(pageIdentifier, callback) {
  if (document.querySelector(pageIdentifier)) {
    try {
      callback();
    } catch (error) {
      console.error(`Error executing script for page ${pageIdentifier}:`, error);
    }
  }
}

// --- MASTER FUNCTION: Runs after the DOM is fully loaded ---
document.addEventListener("DOMContentLoaded", () => {
  // --- SET ACTIVE NAVIGATION LINK ---
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const currentPageUrl = window.location.pathname;

  navLinks.forEach((link) => {
    const linkUrl = new URL(link.href).pathname;

    // Special case for the root URL (homepage)
    if (currentPageUrl === "/" || currentPageUrl.endsWith("/index.html")) {
      if (link.getAttribute("href") === "index.html") {
        link.classList.add("active");
      }
    } else if (currentPageUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Add this inside your 'DOMContentLoaded' event listener in script.js

  // --- INTERACTIVE CONTACT FORM ---
  onPage("#contact-form", () => {
    const form = document.getElementById("contact-form");
    const formContainer = document.querySelector(".contact-form-container");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop the page from reloading

      // You could add form validation here if you wanted

      // Display a success message
      formContainer.innerHTML = `
            <div class="form-success">
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll get back to you shortly.</p>
            </div>
        `;
      // Add some basic styling for the success message in styles.css
    });
  });
  // Add this inside your 'DOMContentLoaded' event listener in script.js

  // --- SITE-WIDE DYNAMIC SEARCH ---
  onPage("#search-input", () => {
    const searchInput = document.getElementById("search-input");

    // Only run the rest of the logic if we are on a page with a grid to filter
    const templatesGrid = document.getElementById("templates-grid");
    const componentsGrid = document.getElementById("components-grid");

    if (searchInput && (templatesGrid || componentsGrid)) {
      searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        // If we are on the templates page
        if (templatesGrid) {
          const allTemplates = templates; // from templates.js import
          const filteredTemplates = allTemplates.filter((template) => {
            return (
              template.title.toLowerCase().includes(searchTerm) ||
              template.description.toLowerCase().includes(searchTerm) ||
              template.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
            );
          });
          renderTemplateCards(filteredTemplates, templatesGrid);
        }

        // If we are on the components page
        if (componentsGrid) {
          const allComponents = components; // from components.js import
          const filteredComponents = allComponents.filter((component) => {
            return (
              component.title.toLowerCase().includes(searchTerm) ||
              component.description.toLowerCase().includes(searchTerm) ||
              component.category.toLowerCase().includes(searchTerm)
            );
          });
          renderComponentCards(filteredComponents, componentsGrid);
        }
      });
    }
  });
  // =================================================
  //  1. SITE-WIDE EFFECTS (Run on every page)
  // =================================================

  // --- Interactive Mouse Spotlight ---
  const body = document.body;
  body.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    });
  });

  // --- Scroll-Triggered Fade-In Animations ---
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );
  revealElements.forEach((el) => observer.observe(el));

  // --- Seamless Page Transitions ---
  document.body.addEventListener("click", (e) => {
    const target = e.target.closest("a");

    if (!document.startViewTransition || !target || target.target === "_blank" || target.hasAttribute("download")) {
      return;
    }

    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL(target.href);

    if (currentUrl.origin === targetUrl.origin) {
      e.preventDefault();
      document.startViewTransition(() => {
        window.location.href = target.href;
      });
    }
  });

  // =================================================
  //  2. PAGE-SPECIFIC SCRIPTS
  // =================================================

  // --- "Featured Templates" Rendering (Index Page) ---
  onPage("#featured-grid", () => {
    const featuredGrid = document.getElementById("featured-grid");
    const featuredTemplates = templates.slice(0, 3);
    renderTemplateCards(featuredTemplates, featuredGrid);
  });

  // --- "Live" Animated Filtering (Templates Page) ---
  onPage("#template-filters", () => {
    const gridContainer = document.getElementById("templates-grid");
    const typeFilter = document.getElementById("type-filter");
    const categoryFilter = document.getElementById("category-filter");
    const resetButton = document.getElementById("reset-filters");

    let currentFilters = {
      type: "all",
      category: "all"
    };

    function applyFiltersAndRender() {
      let filteredTemplates = [...templates];
      if (currentFilters.type !== "all") {
        filteredTemplates = filteredTemplates.filter((t) => t.type === currentFilters.type);
      }
      if (currentFilters.category !== "all") {
        filteredTemplates = filteredTemplates.filter((t) => t.category === currentFilters.category);
      }
      renderTemplateCards(filteredTemplates, gridContainer);
    }

    applyFiltersAndRender(); // Initial render

    typeFilter.addEventListener("change", (e) => {
      currentFilters.type = e.target.value;
      applyFiltersAndRender();
    });
    categoryFilter.addEventListener("change", (e) => {
      currentFilters.category = e.target.value;
      applyFiltersAndRender();
    });
    resetButton.addEventListener("click", () => {
      currentFilters = {
        type: "all",
        category: "all"
      };
      typeFilter.value = "all";
      categoryFilter.value = "all";
      applyFiltersAndRender();
    });
  });

  // --- "Live" Animated Filtering (Components Page) ---
  onPage("#component-categories", () => {
    const gridContainer = document.getElementById("components-grid");
    const categoryButtons = document.querySelectorAll(".category-btn");

    function displayComponents(category = "all") {
      let filteredComponents = components;
      if (category !== "all") {
        filteredComponents = components.filter((c) => c.category === category);
      }
      renderComponentCards(filteredComponents, gridContainer);
    }

    displayComponents("all"); // Initial render

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.dataset.category;
        displayComponents(category);
      });
    });
  });

  // --- Animated "Live" Code Preview (About Page) ---
  onPage(".code-preview", () => {
    const codePreviewContainer = document.querySelector(".code-preview");
    if (!codePreviewContainer) return;

    codePreviewContainer.innerHTML = '<div class="code-content"></div>';
    const codeContent = codePreviewContainer.querySelector(".code-content");

    const codeLines = [
      '<div class="web-dev-hub">',
      "  <h1>Learning Never Stops</h1>",
      '  <p>Built with <span class="heart">❤️</span></p>',
      "</div>"
    ];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function typeCode() {
      if (!codeContent) return;
      codeContent.innerHTML = "";
      for (const line of codeLines) {
        const lineEl = document.createElement("div");
        lineEl.classList.add("code-line", "typing");
        codeContent.appendChild(lineEl);
        for (const char of line) {
          lineEl.innerHTML += char;
          await sleep(Math.random() * 60 + 10);
        }
        lineEl.classList.remove("typing");
        await sleep(400);
      }
      await sleep(4000);
      if (document.querySelector(".code-preview")) {
        typeCode();
      }
    }
    typeCode();
  });
});
