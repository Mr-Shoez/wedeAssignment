/* =====================================================================
    COMPONENT DATA (components.js)
    This file contains the data for all UI components.
    To add a new component, add a new object to the `components` array.
=====================================================================*/

export const components = [
  {
    id: "comp-001",
    title: "Thank you message display",
    category: "display",
    description:
      "The Thank You component is a confirmation message often displayed after a purchase has been made by the end user.",
    image: "images/thank you/Screenshot 2025-08-27 173029.png",
    html: `<section class="cd-position-relative cd-z-index-1 cd-padding-y-2xl">
  <div class="cd-container cd-max-width-adaptive-sm cd-text-center">
    <svg class="cd-icon thank-you__icon cd-margin-bottom-sm" viewBox="0 0 96 96" aria-hidden="true">
      <g fill="currentColor">
        <circle cx="48" cy="48" r="48" opacity=".1"></circle>
        <circle cx="48" cy="48" r="31" opacity=".2"></circle>
        <circle cx="48" cy="48" r="15" opacity=".3"></circle>
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 48.5l5 5 11-11"></path>
        <path transform="rotate(25.474 70.507 8.373)" opacity=".5" d="M68.926 4.12h3.159v8.506h-3.159z"></path>
        <path transform="rotate(-52.869 17.081 41.485)" opacity=".5" d="M16.097 36.336h1.969v10.298h-1.969z"></path>
        <path transform="rotate(82.271 75.128 61.041)" opacity=".5" d="M74.144 57.268h1.969v7.547h-1.969z"></path>
        <circle cx="86.321" cy="41.45" r="2.946" opacity=".5"></circle>
        <circle cx="26.171" cy="78.611" r="1.473" opacity=".5"></circle>
        <circle cx="49.473" cy="9.847" r="1.473" opacity=".5"></circle>
        <circle cx="10.283" cy="63" r="2.946" opacity=".2"></circle>
        <path opacity=".4" d="M59.948 88.142l10.558-3.603-4.888-4.455-5.67 8.058z"></path>
        <path opacity=".3" d="M18.512 19.236l5.667 1.456.519-8.738-6.186 7.282z"></path>
      </g>
    </svg>

    <div>
      <h1 class="cd-margin-bottom-xs">Thank you!</h1>
        <p class="thank-you__paragraph cd-margin-bottom-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

        <p><a class="cd-link" href="#0">Continue shopping →</a></p>
    </div>
  </div>
</section>`,
    css: `/* -------------------------------- 

File#: _1_thank-you
Title: Thank You
Descr: Order confirmation template
Usage: codyhouse.co/license

-------------------------------- */

/* reset */
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: hsl(0, 0%, 100%);
  font-family: system-ui, sans-serif;
  color: hsl(230, 7%, 23%);
  font-size: 1.125rem; /* 18px */
  line-height: 1.4;
}

h1, h2, h3, h4 {
  line-height: 1.2;
  color: hsl(230, 13%, 9%);
  font-weight: 700;
}

h1 {
  font-size: 2.5rem; /* 40px */
}

h2 {
  font-size: 2.125rem; /* 34px */
}

h3 {
  font-size: 1.75rem; /* 28px */
}

h4 {
  font-size: 1.375rem; /* 22px */
}

ol, ul, menu {
  list-style: none;
}

button, input, textarea, select {
  background-color: transparent;
  border-radius: 0;
  color: inherit;
  line-height: inherit;
  -webkit-appearance: none;
          appearance: none;
}

textarea {
  resize: vertical;
  overflow: auto;
  vertical-align: top;
}

a {
  color: hsl(250, 84%, 54%);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, video, svg {
  display: block;
  max-width: 100%;
}

/* -------------------------------- 

Icons 

-------------------------------- */

.cd-icon {
  --size: 1em;
  font-size: var(--size);
  height: 1em;
  width: 1em;
  display: inline-block;
  color: inherit;
  fill: currentColor;
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}

/* --------------------------------

Component 

-------------------------------- */

.thank-you__icon {
  --size: 96px;
  color: hsl(170, 78%, 36%);
}

.thank-you__paragraph {
  line-height: 1.4;
  color: hsl(225, 4%, 47%);
}

/* -------------------------------- 

Utilities 

-------------------------------- */

.cd-position-relative {
  position: relative;
}

.cd-z-index-1 {
  z-index: 1;
}

.cd-margin-bottom-xs {
  margin-bottom: 1rem;
}

.cd-padding-y-2xl {
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.cd-container {
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;
}

.cd-max-width-adaptive-sm {
  max-width: 32rem;
}

@media (min-width: 48rem) {
  .cd-max-width-adaptive-sm {
    max-width: 48rem;
  }
}

.cd-text-center {
  text-align: center;
}

/* link */
.cd-link {
  color: hsl(250, 84%, 54%);
  text-decoration: none;
  background-image: linear-gradient(to right, hsl(250, 84%, 54%) 50%, hsla(250, 84%, 54%, 0.2) 50%);
  background-size: 200% 1px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  transition: background-position 0.2s;
}

.cd-link:hover {
  background-position: 0% 100%;
}`
  },

  {
    id: "comp-002",
    title: "Toast",
    category: "notification",
    description: "The Toast component can be used to show a notification message.",
    image: "images/toast/Screenshot 2025-08-27 172810.png",
    html: `<p class="ta1-color-contrast-medium ta1-margin-bottom-sm">👇 Click multiple times to show multiple notifications.</p>

<button class="ta1-btn ta1-btn--primary" aria-controls="toast-1">Show Toast</button>

<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-1">
  <div class="ta1-flex ta1-items-start ta1-justify-between">
    <div class="ta1-text-component ta1-text-sm">
      <h1 class="toast__title ta1-text-md">Title One</h1>
      <p class="toast__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto ut, error aspernatur quaerat corrupti ipsum deleniti ratione.</p>
    </div>
  
    <button class="toast__close-btn ta1-margin-left-4xs js-toast__close-btn js-tab-focus">
      <svg class="ta1-icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg>
    </button>
  </div>
</div>

<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-2">
  <div class="ta1-flex ta1-items-start ta1-justify-between">
    <div class="toast__icon-wrapper toast__icon-wrapper--warning ta1-margin-right-xs">
      <svg class="ta1-icon" viewBox="0 0 16 16"><title>Alert</title><path d="M15.8,12.526,9.483.88A1.668,1.668,0,0,0,8.8.2,1.693,1.693,0,0,0,6.516.88L.2,12.526A1.678,1.678,0,0,0,1.686,15H14.314a1.7,1.7,0,0,0,.8-.2,1.673,1.673,0,0,0,.687-2.274ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13ZM9,9.5a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,7,9.5v-4A.5.5,0,0,1,7.5,5h1a.5.5,0,0,1,.5.5Z"></path></g></svg>
    </div>

    <div class="ta1-text-component ta1-text-sm">
      <h1 class="toast__title ta1-text-md">Title Two</h1>
      <p class="toast__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  
    <button class="toast__close-btn ta1-margin-left-4xs js-toast__close-btn js-tab-focus">
      <svg class="ta1-icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg>
    </button>
  </div>
</div>

<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-3">
  <header class="ta1-flex ta1-items-center ta1-justify-between ta1-border-bottom ta1-border-bg ta1-border-opacity-20% ta1-padding-bottom-xs ta1-margin-bottom-xs">
    <h1 class="toast__title ta1-text-base ta1-text-truncate">Title Three</h1>

    <button class="toast__close-btn ta1-margin-left-4xs js-toast__close-btn js-tab-focus">
      <svg class="ta1-icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg>
    </button>
  </header>

  <p class="toast__p ta1-text-sm ta1-line-height-md">Lorem ipsum dolor sit amet consectetur.</p>
</div>

<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-4">
  <div class="ta1-flex ta1-items-start ta1-justify-between">
    <div>
      <div class="ta1-text-component ta1-text-sm">
        <h1 class="toast__title ta1-text-md">Title Four</h1>
        <p class="toast__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, delectus.</p>
      </div>

      <a class="ta1-btn ta1-btn--primary ta1-btn--sm ta1-width-100% ta1-margin-top-xs" href="#0">Button</a>
    </div>
  
    <button class="toast__close-btn ta1-margin-left-4xs js-toast__close-btn js-tab-focus">
      <svg class="ta1-icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg>
    </button>
  </div>
</div>

<div class="toast toast--hidden toast--top-right js-toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-5">
  <div class="ta1-flex ta1-items-start ta1-justify-between">
    <div class="toast__icon-wrapper toast__icon-wrapper--success ta1-margin-right-xs">
      <svg class="ta1-icon" viewBox="0 0 16 16"><title>Success</title><g><path d="M6,15a1,1,0,0,1-.707-.293l-5-5A1,1,0,1,1,1.707,8.293L5.86,12.445,14.178.431a1,1,0,1,1,1.644,1.138l-9,13A1,1,0,0,1,6.09,15C6.06,15,6.03,15,6,15Z"></path></g></svg>
    </div>

    <div class="ta1-text-component ta1-text-sm">
      <h1 class="toast__title ta1-text-md">Title Five</h1>
      <p class="toast__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo esse maiores assumenda.</p>
    </div>
  
    <button class="toast__close-btn ta1-margin-left-4xs js-toast__close-btn js-tab-focus">
      <svg class="ta1-icon" viewBox="0 0 12 12"><title>Close notification</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="1" y1="1" x2="11" y2="11" /><line x1="11" y1="1" x2="1" y2="11" /></g></svg>
    </button>
  </div>
</div>`,
    css: `/* -------------------------------- 

File#: _1_toast
Title: Toast
Descr: Notification message
Usage: codyhouse.co/license

-------------------------------- */
/* reset */
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  background-color: hsl(0, 0%, 100%);
  font-family: system-ui, sans-serif;
  color: hsl(230, 7%, 23%);
  font-size: 1rem;
}

h1, h2, h3, h4 {
  line-height: 1.2;
  color: hsl(230, 13%, 9%);
  font-weight: 700;
}

h1 {
  font-size: 2.0736rem;
}

h2 {
  font-size: 1.728rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1.2rem;
}

ol, ul, menu {
  list-style: none;
}

button, input, textarea, select {
  background-color: transparent;
  border-radius: 0;
  color: inherit;
  line-height: inherit;
  appearance: none;
}

textarea {
  resize: vertical;
  overflow: auto;
  vertical-align: top;
}

a {
  color: hsl(250, 84%, 54%);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, video, svg {
  display: block;
  max-width: 100%;
}

@media (min-width: 64rem) {
  body {
    font-size: 1.25rem;
  }

  h1 {
    font-size: 3.051rem;
  }

    h2 {
    font-size: 2.44rem;
  }

    h3 {
    font-size: 1.75rem;
  }

    h4 {
    font-size: 1.5625rem;
  }
}

/* variables */
:root {
  /* colors */
  --ta1-color-primary-hsl: 250, 84%, 54%;
  --ta1-color-bg-hsl: 0, 0%, 100%;
  --ta1-color-contrast-high-hsl: 230, 7%, 23%;
  --ta1-color-contrast-higher-hsl: 230, 13%, 9%;
  --ta1-color-success-hsl: 170, 78%, 36%;
  --ta1-color-warning-hsl: 35, 79%, 66%;
  --ta1-color-contrast-medium-hsl: 225, 4%, 47%;
  --ta1-color-bg-dark-hsl: 240, 4%, 95%;
  --ta1-color-white-hsl: 0, 0%, 100%;
  --ta1-color-primary-darker-hsl: 250, 84%, 38%;
  --ta1-color-primary-light-hsl: 250, 84%, 60%;
  --ta1-color-accent-hsl: 342, 89%, 48%;
  --ta1-color-contrast-lower-hsl: 240, 4%, 85%;

  /* spacing */
  --ta1-space-4xs: 0.125rem;
  --ta1-space-xs: 0.5rem;
  --ta1-space-sm: 0.75rem;
  --ta1-space-2xs: 0.375rem;
  --ta1-space-md: 1.25rem;

  /* typography */
  --ta1-text-md: 1.2rem;
  --ta1-text-base: 1rem;
  --ta1-text-sm: 0.833rem;
  --ta1-text-sm: 0.833rem;
}

@media(min-width: 64rem){
  :root {
    /* spacing */
    --ta1-space-4xs: 0.1875rem;
    --ta1-space-xs: 0.75rem;
    --ta1-space-sm: 1.125rem;
    --ta1-space-2xs: 0.5625rem;
    --ta1-space-md: 2rem;

    /* typography */
    --ta1-text-md: 1.5625rem;
    --ta1-text-base: 1.25rem;
    --ta1-text-sm: 1rem;
    --ta1-text-sm: 1rem;
  }
}

/* buttons */
.ta1-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  white-space: nowrap;
  text-decoration: none;
  background: hsl(var(--ta1-color-bg-dark-hsl));
  color: hsl(var(--ta1-color-contrast-higher-hsl));
  cursor: pointer;
  text-decoration: none;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.2s ease;
  will-change: transform;
  padding: var(--ta1-space-2xs) var(--ta1-space-sm);
  border-radius: 0.25em;
}

.ta1-btn:focus-visible {
  box-shadow: 0px 0px 0px 2px hsl(var(--ta1-color-bg-hsl)), 0px 0px 0px 4px hsla(var(--ta1-color-contrast-higher-hsl), 0.15);
  outline: none;
}

.ta1-btn:active {
  transform: translateY(2px);
}

.ta1-btn--primary {
  background: hsl(var(--ta1-color-primary-hsl));
  color: hsl(var(--ta1-color-white-hsl));
  box-shadow: inset 0px 1px 0px hsla(var(--ta1-color-white-hsl), 0.15), 0px 1px 3px hsla(var(--ta1-color-primary-darker-hsl), 0.25), 0px 2px 6px hsla(var(--ta1-color-primary-darker-hsl), 0.1), 0px 6px 10px -2px hsla(var(--ta1-color-primary-darker-hsl), 0.25);
}

.ta1-btn--primary:hover {
  background: hsl(var(--ta1-color-primary-light-hsl));
  box-shadow: inset 0px 1px 0px hsla(var(--ta1-color-white-hsl), 0.15), 0px 1px 2px hsla(var(--ta1-color-primary-darker-hsl), 0.25), 0px 1px 4px hsla(var(--ta1-color-primary-darker-hsl), 0.1), 0px 3px 6px -2px hsla(var(--ta1-color-primary-darker-hsl), 0.25);
}

.ta1-btn--primary:focus {
  box-shadow: inset 0px 1px 0px hsla(var(--ta1-color-white-hsl), 0.15), 0px 1px 2px hsla(var(--ta1-color-primary-darker-hsl), 0.25), 0px 1px 4px hsla(var(--ta1-color-primary-darker-hsl), 0.1), 0px 3px 6px -2px hsla(var(--ta1-color-primary-darker-hsl), 0.25), 0px 0px 0px 2px hsl(var(--ta1-color-bg-hsl)), 0px 0px 0px 4px hsl(var(--ta1-color-primary-hsl));
}

.ta1-btn--sm {
  font-size: 0.8em;
}

/* icons */
.ta1-icon {
  height: var(--ta1-size, 1em);
  width: var(--ta1-size, 1em);
  display: inline-block;
  color: inherit;
  fill: currentColor;
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}

/* component */
:root {
  --toast-width: 400px;
  --toast-gap: var(--ta1-space-xs);
  --toast-transition-duration: .3s;
}

/* element created in JS - used to wrap toasts with same position (e.g., top-right) */
.toast-wrapper {
  width: var(--toast-width);
  max-width: 80%;
  padding: var(--ta1-space-sm);
  z-index: 10;
  pointer-events: none;
}

.toast {
  background-color: hsla(var(--ta1-color-contrast-higher-hsl), 0.98);
  box-shadow: 0 0.3px 0.4px rgba(0, 0, 0, 0.025),0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  padding: var(--ta1-space-sm);
  color: hsl(var(--ta1-color-bg-hsl));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  pointer-events: auto;
  will-change: transform;
  transition: opacity var(--toast-transition-duration), visibility 0s, -webkit-transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity var(--toast-transition-duration), visibility 0s, transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity var(--toast-transition-duration), visibility 0s, transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
}

.toast--hidden {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  transition: opacity var(--toast-transition-duration), visibility 0s var(--toast-transition-duration), -webkit-transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity var(--toast-transition-duration), visibility 0s var(--toast-transition-duration), transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity var(--toast-transition-duration), visibility 0s var(--toast-transition-duration), transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform var(--toast-transition-duration) cubic-bezier(0.215, 0.61, 0.355, 1);
}

.toast--top-right,
.toast--top-center,
.toast--top-left {
  margin-bottom: var(--toast-gap);
}

.toast--bottom-right,
.toast--bottom-center,
.toast--bottom-left {
  margin-top: var(--toast-gap);
}

.toast__title, .toast__p {
  color: hsl(var(--ta1-color-bg-hsl));
}

.toast__p {
  opacity: 0.6;
}

.toast__close-btn {
  --ta1-size: 24px;
  width: var(--ta1-size);
  height: var(--ta1-size);
  display: flex;
  background-color: hsla(var(--ta1-color-bg-hsl), 0.15);
  border-radius: 50%;
  flex-shrink: 0;
  transition: background 0.2s;
}
.toast__close-btn .ta1-icon {
  --ta1-size: 12px;
  margin: auto;
  color: hsl(var(--ta1-color-bg-hsl));
}
.toast__close-btn:hover {
  background-color: hsla(var(--ta1-color-bg-hsl), 0.1);
}

.toast__icon-wrapper {
  --ta1-size: 32px;
  width: var(--ta1-size);
  height: var(--ta1-size);
  display: flex;
  flex-shrink: 0;
  border-radius: 50%;
}
.toast__icon-wrapper .ta1-icon {
  --ta1-size: 16px;
  margin: auto;
}

.toast__icon-wrapper--warning {
  background-color: hsla(var(--ta1-color-warning-hsl), 0.2);
}
.toast__icon-wrapper--warning .ta1-icon {
  color: hsl(var(--ta1-color-warning-hsl));
}

.toast__icon-wrapper--success {
  background-color: hsla(var(--ta1-color-success-hsl), 0.2);
}
.toast__icon-wrapper--success .ta1-icon {
  color: hsl(var(--ta1-color-success-hsl));
}

/* utility classes */
.ta1-flex {
  display: flex;
}

.ta1-position-fixed {
  position: fixed;
}

.ta1-margin-left-4xs {
  margin-left: var(--ta1-space-4xs);
}

.ta1-text-md {
  font-size: var(--ta1-text-md);
}

.ta1-text-sm {
  font-size: var(--ta1-text-sm);
}

.ta1-text-component :where(h1, h2, h3, h4) {
  line-height: var(--ta1-heading-line-height, 1.2);
  margin-top: calc(var(--ta1-space-md) * var(--ta1-space-multiplier, 1));
  margin-bottom: calc(var(--ta1-space-sm) * var(--ta1-space-multiplier, 1));
}

.ta1-text-component :where(p, blockquote, ul li, ol li) {
  line-height: var(--ta1-body-line-height, 1.4);
}

.ta1-text-component :where(ul, ol, p, blockquote, .ta1-text-component__block) {
  margin-bottom: calc(var(--ta1-space-sm) * var(--ta1-space-multiplier, 1));
}

.ta1-text-component :where(ul, ol) {
  padding-left: 1.25em;
}

.ta1-text-component ul :where(ul, ol), .ta1-text-component ol :where(ul, ol) {
  padding-left: 1em;
  margin-bottom: 0;
}

.ta1-text-component ul {
  list-style-type: disc;
}

.ta1-text-component ol {
  list-style-type: decimal;
}

.ta1-text-component img {
  display: block;
  margin: 0 auto;
}

.ta1-text-component figcaption {
  margin-top: calc(var(--ta1-space-xs) * var(--ta1-space-multiplier, 1));
  font-size: var(--ta1-text-sm);
  text-align: center;}

.ta1-text-component em {
  font-style: italic;
}

.ta1-text-component strong {
  font-weight: bold;
}

.ta1-text-component s {
  text-decoration: line-through;
}

.ta1-text-component u {
  text-decoration: underline;
}

.ta1-text-component mark {
  background-color: hsla(var(--ta1-color-accent-hsl), 0.2);
  color: inherit;
}

.ta1-text-component blockquote {
  padding-left: 1em;
  border-left: 4px solid hsl(var(--ta1-color-contrast-lower-hsl));
  font-style: italic;
}

.ta1-text-component hr {
  margin: calc(var(--ta1-space-md) * var(--ta1-space-multiplier, 1)) auto;
  background: hsl(var(--ta1-color-contrast-lower-hsl));
  height: 1px;
}

.ta1-text-component > *:first-child {
  margin-top: 0;
}

.ta1-text-component > *:last-child {
  margin-bottom: 0;
}

.ta1-text-component.ta1-line-height-xs {
  --ta1-heading-line-height: 1;
  --ta1-body-line-height: 1.1;
}

.ta1-text-component.ta1-line-height-sm {
  --ta1-heading-line-height: 1.1;
  --ta1-body-line-height: 1.2;
}

.ta1-text-component.ta1-line-height-md {
  --ta1-heading-line-height: 1.15;
  --ta1-body-line-height: 1.4;
}

.ta1-text-component.ta1-line-height-lg {
  --ta1-heading-line-height: 1.22;
  --ta1-body-line-height: 1.58;
}

.ta1-text-component.ta1-line-height-xl {
  --ta1-heading-line-height: 1.3;
  --ta1-body-line-height: 1.72;
}

.ta1-margin-right-xs {
  margin-right: var(--ta1-space-xs);
}

.ta1-justify-between {
  justify-content: space-between;
}

.ta1-items-start {
  align-items: flex-start;
}

.ta1-margin-top-xs {
  margin-top: var(--ta1-space-xs);
}

.ta1-width-100\% {
  width: 100%;
}

.ta1-line-height-md {
  line-height: 1.4;
}

.ta1-text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ta1-text-base {
  font-size: var(--ta1-text-base);
}

.ta1-margin-bottom-xs {
  margin-bottom: var(--ta1-space-xs);
}

.ta1-padding-bottom-xs {
  padding-bottom: var(--ta1-space-xs);
}

.ta1-border-bottom {
  --ta1-border-o: 1;
  border-bottom: var(--ta1-border-width, 1px) var(--ta1-border-style, solid) hsla(var(--ta1-color-contrast-lower-hsl), var(--ta1-border-o, 1));
}

.ta1-items-center {
  align-items: center;
}

.ta1-margin-bottom-sm {
  margin-bottom: var(--ta1-space-sm);
}

.ta1-color-contrast-medium {
  --ta1-color-o: 1;
  color: hsla(var(--ta1-color-contrast-medium-hsl), var(--ta1-color-o, 1));
}

.ta1-border-bg {
  --ta1-border-o: 1;
  border-color: hsla(var(--ta1-color-bg-hsl), var(--ta1-border-o, 1));
}

.ta1-border-opacity-20\% {
  --ta1-border-o: 0.2;
}

.ta1-top-0 {
  top: 0;
}

.ta1-left-0 {
  left: 0;
}

.ta1-right-0 {
  right: 0;
}

.ta1-bottom-0 {
  bottom: 0;
}

.ta1-flex-column {
  flex-direction: column;
}

.ta1-left-50\% {
  left: 50%;
}

.-ta1-translate-x-50\% {
  transform: translate3d(-50%, 0, 0);
}

.ta1-flex-column-reverse {
  flex-direction: column-reverse;
}`,
    js: `// utility functions
if(!Util) function Util () {};

Util.hasClass = function(el, className) {
  return el.classList.contains(className);
};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

// File#: _1_toast
// Usage: codyhouse.co/license
(function() {
  var Toasts = function() {
    this.toastsEl = document.getElementsByClassName('js-toast');
    this.toastsId = getRandomInt(0, 1000);
    this.index = 0;
    this.closingToast = false;
    initToasts(this);
  };

  // public method to initialize new toast elements
  Toasts.prototype.initToast = function(element) {
		initSingleToast(this, element);
	};

  function initToasts(obj) {
    // create a wrapper element for each toast variation
    createWrapper(obj, 'top-right');
    createWrapper(obj, 'top-left');
    createWrapper(obj, 'top-center');
    createWrapper(obj, 'bottom-right');
    createWrapper(obj, 'bottom-left');
    createWrapper(obj, 'bottom-center');

    // init single toast element
    for(var i = 0; i < obj.toastsEl.length; i++) {
      initSingleToast(obj, obj.toastsEl[i]);
    }

    // listen for dynamic toast creation
    window.addEventListener('newToast', function(event) {
      initSingleToast(obj, event.detail);
    });
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  };

  function createWrapper(obj, position) {
    var classes = 'ta1-top-0 ta1-left-0 ta1-flex-column';
    if(position == 'top-right') classes = 'ta1-top-0 ta1-right-0 ta1-flex-column';
    if(position == 'top-center') classes = 'ta1-top-0 ta1-left-50% -ta1-translate-x-50% ta1-flex-column ta1-items-center';
    if(position == 'bottom-right') classes = 'ta1-bottom-0 ta1-right-0 ta1-flex-column-reverse';
    if(position == 'bottom-left') classes = 'ta1-bottom-0 ta1-left-0 ta1-flex-column-reverse';
    if(position == 'bottom-center') classes = 'ta1-bottom-0 ta1-left-50% -ta1-translate-x-50% ta1-flex-column-reverse ta1-items-center';

    var div = '<div class="toast-wrapper ta1-position-fixed ta1-flex '+classes+'" id="toast-wrapper-'+position+'"></div>';
    document.body.insertAdjacentHTML('beforeend', div);
    obj[position] = document.getElementById('toast-wrapper-'+position);
  };

  function initSingleToast(obj, toast) {
    var id = 'toast-'+obj.toastsId+'-'+obj.index;
    obj.index = obj.index + 1;
    // store toast info in the Toasts obj
    obj[id] = {};
    obj[id]['interval'] = toast.getAttribute('data-toast-interval') || 5000,
    obj[id]['intervalId'] = false;
    obj[id]['closing'] = false;
    // get position type
    var classes = toast.getAttribute('class');
    obj[id]['position'] = 'top-right';
    if(classes.indexOf('toast--top-left') > -1) obj[id]['position'] = 'top-left';
    if(classes.indexOf('toast--top-center') > -1) obj[id]['position'] = 'top-center';
    if(classes.indexOf('toast--bottom-right') > -1) obj[id]['position'] = 'bottom-right';
    if(classes.indexOf('toast--bottom-left') > -1) obj[id]['position'] = 'bottom-left'; 
    if(classes.indexOf('toast--bottom-center') > -1) obj[id]['position'] = 'bottom-center';

    // listen for custom open event
    toast.addEventListener('openToast', function() {
      if(!Util.hasClass(toast, 'toast--hidden') || obj[id]['closing']) return;
      openToast(obj, toast, id);
    });

    // close toast
    toast.addEventListener('click', function(event){
      if(event.target.closest('.js-toast__close-btn')) {
        obj.closingToast = true;
        closeToast(obj, toast, id);
      }
    });
  };

  function openToast(obj, toast, id) {
    if(obj[id]['intervalId']) {
      clearInterval(obj[id]['intervalId']);
      obj[id]['intervalId'] = false;
    }
    // place toast - insert in the proper container
    var fragment = document.createDocumentFragment();
    fragment.appendChild(toast);
    obj[obj[id]['position']].appendChild(fragment);

    // change position
    toast.style.position = 'static';

    // show toast
    setTimeout(function() {
      Util.removeClass(toast, 'toast--hidden');
    });
    
    // automatically close after a time interval
    if(obj[id]['interval'] && parseInt(obj[id]['interval']) > 0) {
      setToastInterval(obj, toast, id, obj[id]['interval']);
    }
  };

  function setToastInterval(obj, toast, id, interval) {
    obj[id]['intervalId'] = setTimeout(function(){
      if(obj.closingToast) return setToastInterval(obj, toast, id, 1000);
      closeToast(obj, toast, id);
    }, interval);
  };

  function closeToast(obj, toast, id) {
    obj[id]['closing'] = true;
    Util.addClass(toast, 'toast--hidden');
    // clear timeout
    if(obj[id]['intervalId']) clearTimeout(obj[id]['intervalId']);
    // remove toast and animate siblings
    closeToastAnimation(obj, toast, id);    
  };

  function closeToastAnimation(obj, toast, id) {
    // get all next elements 
    var siblings = getToastNextSiblings(toast);
    // get translate value (could be positive or negative based on position)
    var toastStyle = window.getComputedStyle(toast),
      margin = parseInt(toastStyle.getPropertyValue('margin-top')) || parseInt(toastStyle.getPropertyValue('margin-bottom'));
    // translate next elements if any
    var translate = toast.offsetHeight + margin;
    if(obj[id]['position'].indexOf('top') > -1) {
      translate = '-'+translate
    }
    for(var i = 0; i < siblings.length; i++) {
      siblings[i].style.transform = 'translateY('+translate+'px)';
    }
    // remove toast and reset translate
    toast.addEventListener('transitionend', function cb(event){
      if(event.propertyName != 'opacity') return;
      toast.removeEventListener('transitionend', cb);
      removeToast(toast, siblings, obj, id);
      obj.closingToast = false;
    });
  };

  function getToastNextSiblings(toast) {
    var array = [];
    var nextSibling = toast.nextElementSibling;
    if(nextSibling) {
      array.push(nextSibling);
      var nextSiblingsIterate = getToastNextSiblings(nextSibling);
      Array.prototype.push.apply(array, nextSiblingsIterate);
    }
    return array;
  };

  function removeToast(toast, siblings, obj, id) {
    // reset position
    toast.style.position = '';

    // move toast back to body
    var fragment = document.createDocumentFragment();
    fragment.appendChild(toast);
    document.body.appendChild(fragment); 

    // reset siblings translate
    for(var i = 0; i < siblings.length; i++) {
      (function(i){
        // set transition to none
        siblings[i].style.transition = 'none';
        siblings[i].style.transform = '';
        setTimeout(function() {siblings[i].style.transition = '';}, 10);
      })(i);
    }

    // reset closing status
    obj[id]['closing'] = false;
  };

  window.Toasts = Toasts;

	//initialize the Toasts objects
	var toasts = document.getElementsByClassName('js-toast');
	if( toasts.length > 0 ) {
		new Toasts();
	}
}());`
  },
  {
    id: "comp-003",
    title: "Alert pop up",
    category: "layout",
    description:
      "The Alert Card component is a card used to display critical information to the user. The user can hide the component if they no longer want to see the alert.",
    image: "images/alert message/Screenshot 2025-08-27 172834.png  ",
    html: `<div class="alert-card js-alert-card">
  <div>
    <h1 class="alert-card__title">
      <svg class="cd-icon" viewBox="0 0 30 30" aria-hidden="true">
        <g>
          <path d="M12.4 2.563L.377 24.518A3.023 3.023 0 0 0 3.006 29h23.987a3.023 3.023 0 0 0 2.632-4.477L17.66 2.569a2.992 2.992 0 0 0-5.26-.006z" fill="#ffd138" opacity=".25"></path>
          <path fill="none" stroke="#efb525" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19v-9"></path>
          <circle cx="15" cy="23.5" r="1.5" fill="#efb525"></circle>
        </g>
      </svg>

      <span>This is an important message</span>
    </h1>

    <p class="alert-card__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium maxime voluptatem praesentium neque consectetur delectus debitis quibusdam quisquam at?</p>


    <div class="alert-card__btns">
      <a class="cd-btn cd-btn--subtle" href="#0">Learn more</a>
      <a class="cd-btn cd-btn--primary" href="#0">Start free trial</a>
    </div>
  </div>

  <button class="alert-card__close-btn js-alert-card__close-btn">
    <svg class="cd-icon" viewBox="0 0 16 16">
      <title>Hide alert</title>
      <g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="2" y1="2" x2="14" y2="14" />
        <line x1="14" y1="2" x2="2" y2="14" />
      </g>
    </svg>
  </button>
</div>`,
    css: `/* -------------------------------- 

File#: _1_alert-card
Title: Alert Card
Descr: Alert card for app UI
Usage: codyhouse.co/license

-------------------------------- */

/* reset */
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: hsl(0, 0%, 100%);
  font-family: system-ui, sans-serif;
  color: hsl(230, 7%, 23%);
  font-size: 1.125rem; /* 18px */
  line-height: 1.4;
}

h1, h2, h3, h4 {
  line-height: 1.2;
  color: hsl(230, 13%, 9%);
  font-weight: 700;
}

h1 {
  font-size: 2.5rem; /* 40px */
}

h2 {
  font-size: 2.125rem; /* 34px */
}

h3 {
  font-size: 1.75rem; /* 28px */
}

h4 {
  font-size: 1.375rem; /* 22px */
}

ol, ul, menu {
  list-style: none;
}

button, input, textarea, select {
  background-color: transparent;
  border-radius: 0;
  color: inherit;
  line-height: inherit;
  -webkit-appearance: none;
          appearance: none;
}

textarea {
  resize: vertical;
  overflow: auto;
  vertical-align: top;
}

a {
  color: hsl(250, 84%, 54%);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, video, svg {
  display: block;
  max-width: 100%;
}

/* -------------------------------- 

Buttons 

-------------------------------- */

.cd-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375em;
  font-size: 1em;
  text-decoration: none;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.2s;
  will-change: transform;
}

.cd-btn:focus-visible {
  outline: none;
}

.cd-btn:active {
  transform: translateY(2px);
}

.cd-btn--primary {
  background: hsl(250, 84%, 54%);
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.15), 
              0 1px 3px hsla(250, 84%, 38%, 0.25), 
              0 2px 6px hsla(250, 84%, 38%, 0.1), 
              0 6px 10px -2px hsla(250, 84%, 38%, 0.25);
  color: hsl(0, 0%, 100%);
}

.cd-btn--primary:hover {
  background: hsl(250, 84%, 60%);
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.15), 
              0 1px 2px hsla(250, 84%, 38%, 0.25), 
              0 1px 4px hsla(250, 84%, 38%, 0.1), 
              0 3px 6px -2px hsla(250, 84%, 38%, 0.25);
}

.cd-btn--primary:focus-visible {
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.15), 
              0 1px 2px hsla(250, 84%, 38%, 0.25), 
              0 1px 4px hsla(250, 84%, 38%, 0.1), 
              0 3px 6px -2px hsla(250, 84%, 38%, 0.25), 
              0 0 0 2px hsl(0, 0%, 100%), 
              0 0 0 4px hsl(250, 84%, 54%);
}

.cd-btn--subtle {
  background: hsl(0, 0%, 100%);
  color: hsl(230, 13%, 9%);
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.1), 
              0 0 0 1px hsla(230, 13%, 9%, 0.02), 
              0 0.3px 0.4px hsla(230, 13%, 9%, 0.025),
              0 1px 3px -1px hsla(230, 13%, 9%, 0.2), 
              0 3.5px 6px hsla(230, 13%, 9%, 0.12);
}

.cd-btn--subtle:hover {
  background: hsl(0, 0%, 100%);
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.1), 
              0 0 0 1px hsla(230, 13%, 9%, 0.02), 
              0 0.1px 0.3px hsla(230, 13%, 9%, 0.06),
              0 1px 2px hsla(230, 13%, 9%, 0.12),
              0 1px 3px -1px hsla(230, 13%, 9%, 0.2);
}

.cd-btn--subtle:focus-visible {
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.1), 
              0 0 0 1px hsla(230, 13%, 9%, 0.02), 
              0 0.3px 0.4px hsla(230, 13%, 9%, 0.025),
              0 1px 3px -1px hsla(230, 13%, 9%, 0.2), 
              0 3.5px 6px hsla(230, 13%, 9%, 0.12), 
              0 0 0 2px hsl(0, 0%, 100%), 
              0 0 0 4px hsl(230, 7%, 23%);
}

/* -------------------------------- 

Icons 

-------------------------------- */

.cd-icon {
  --size: 1em;
  font-size: var(--size);
  height: 1em;
  width: 1em;
  display: inline-block;
  color: inherit;
  fill: currentColor;
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}

.cd-icon use { /* SVG symbols - enable icon color corrections */
  color: inherit;
  fill: currentColor;
}

/* -------------------------------- 

Component 

-------------------------------- */

.alert-card {
  position: relative;
  z-index: 1;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.375em;
  padding: 2rem;
  box-shadow: 0 0 0 1px hsla(230, 13%, 9%, 0.02),
              0 1px 3px -1px hsla(230, 13%, 9%, 0.2);
}

.alert-card__title {
  font-size: 1.375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding-right: 2rem;
}

.alert-card__title .cd-icon {
  --size: 30px;
  color: hsl(35, 79%, 66%);
}

.alert-card__content {
  color: hsl(225, 4%, 47%);
  line-height: 1.58;
  font-size: 0.9375rem;
  margin: 0.75rem 0;
}

.alert-card__btns {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (min-width: 42.5rem) {
  .alert-card__btns {
    flex-direction: row;
  }
}

.alert-card__close-btn {
  height: 32px;
  width: 32px;
  position: absolute;
  z-index: 1;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  border-radius: 50%;
  transition: 0.2s;
}

.alert-card__close-btn .cd-icon {
  --size: 16px;
  margin: auto;
  display: block;
}

.alert-card__close-btn:hover {
  background-color: hsla(230, 13%, 9%, 0.1);
}

/* -------------------------------- 

Utilities 

-------------------------------- */

.cd-hide {
  display: none;
}`,
    js: `// File#: _1_alert-card
// Usage: codyhouse.co/license
(function() {
  function initAlertCard(card) {
    card.addEventListener('click', function(event) {
      if(event.target.closest('.js-alert-card__close-btn')) card.classList.add('cd-hide');
    });
  };

  var alertCards = document.getElementsByClassName('js-alert-card');
  if(alertCards.length > 0) {
    for(var i = 0; i < alertCards.length; i++) {
      (function(i){initAlertCard(alertCards[i])})(i);
    }
  }
}());`
  },
  {
    id: "comp-004",
    title: "link cards",
    category: "Card",
    description:
      "The Link Card component is used to display a dashboard card linking to another page. The content of the card is fully customizable.",
    image: "images/link cards/Screenshot 2025-08-27 172953.png",
    html: `<a class="link-card lm0-flex lm0-flex-column lm0-bg-light lm0-radius-md" href="#0" aria-label="Link label">
  <div class="lm0-padding-md">
    <div class="lm0-flex lm0-flex-wrap lm0-gap-xs lm0-items-center">
      <figure>
        <svg class="lm0-block lm0-color-primary" width="72" height="72" viewBox="0 0 72 72">
          <circle fill="currentColor" opacity="0.15" cx="36" cy="36" r="36"/>
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M45,49h6V43.562a2,2,0,0,0-1.515-1.941l-5.833-1.458a1,1,0,0,1-.747-.829l-.412-2.881A6,6,0,0,0,46,31V28.252A6.167,6.167,0,0,0,40.185,22,5.973,5.973,0,0,0,37,22.8"/><path d="M39.549,43.586l-4.925-1.408a1,1,0,0,1-.716-.82l-.415-2.9S37.219,38.734,39,37a10.227,10.227,0,0,1-2-6.738,6.185,6.185,0,0,0-5.761-6.257,6,6,0,0,0-6.234,5.756c0,.08,0,.159,0,.239a10.45,10.45,0,0,1-2,7c1.781,1.734,5.507,1.453,5.507,1.453l-.415,2.9a1,1,0,0,1-.716.82l-4.925,1.408A2,2,0,0,0,21,45.509V49H41V45.509A2,2,0,0,0,39.549,43.586Z"/>
          </g>
        </svg>
      </figure>

      <div class="lm0-line-height-xs">
        <p class="lm0-text-lg lm0-font-semibold lm0-color-contrast-higher">1,354</p>
        <p class="lm0-color-contrast-low lm0-margin-top-3xs">Users</p>
      </div>
    </div>
  </div>

  <div class="link-card__footer lm0-margin-top-auto lm0-border-top lm0-border-contrast-lower">
    <p class="lm0-text-sm">View</p>

    <div>
      <svg class="lm0-icon lm0-icon--sm" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12" /><polyline points="15 6 21 12 15 18"/></g></svg>
    </div>
  </div>
</a>`,
    css: `/* -------------------------------- 

File#: _1_link-card
Title: Link Card
Descr: Link card for app UI
Usage: codyhouse.co/license

-------------------------------- */
/* reset */
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  background-color: hsl(0, 0%, 100%);
  font-family: system-ui, sans-serif;
  color: hsl(230, 7%, 23%);
  font-size: 1rem;
}

h1, h2, h3, h4 {
  line-height: 1.2;
  color: hsl(230, 13%, 9%);
  font-weight: 700;
}

h1 {
  font-size: 2.0736rem;
}

h2 {
  font-size: 1.728rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1.2rem;
}

ol, ul, menu {
  list-style: none;
}

button, input, textarea, select {
  background-color: transparent;
  border-radius: 0;
  color: inherit;
  line-height: inherit;
  appearance: none;
}

textarea {
  resize: vertical;
  overflow: auto;
  vertical-align: top;
}

a {
  color: hsl(250, 84%, 54%);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, video, svg {
  display: block;
  max-width: 100%;
}

@media (min-width: 64rem) {
  body {
    font-size: 1.25rem;
  }

  h1 {
    font-size: 3.051rem;
  }

    h2 {
    font-size: 2.44rem;
  }

    h3 {
    font-size: 1.75rem;
  }

    h4 {
    font-size: 1.5625rem;
  }
}

/* variables */
:root {
  /* colors */
  --lm0-color-primary-hsl: 250, 84%, 54%;
  --lm0-color-bg-hsl: 0, 0%, 100%;
  --lm0-color-contrast-high-hsl: 230, 7%, 23%;
  --lm0-color-contrast-higher-hsl: 230, 13%, 9%;
  --lm0-color-contrast-lower-hsl: 240, 4%, 85%;
  --lm0-color-contrast-low-hsl: 240, 4%, 65%;
  --lm0-color-bg-light-hsl: 0, 0%, 100%;

  /* spacing */
  --lm0-space-3xs: 0.25rem;
  --lm0-space-xs: 0.5rem;
  --lm0-space-md: 1.25rem;

  /* typography */
  --lm0-text-lg: 1.25rem;
  --lm0-text-sm: 0.833rem;
}

@media(min-width: 64rem){
  :root {
    /* spacing */
    --lm0-space-3xs: 0.375rem;
    --lm0-space-xs: 0.75rem;
    --lm0-space-md: 2rem;

    /* typography */
    --lm0-text-lg: 1.75rem;
    --lm0-text-sm: 1rem;
  }
}

/* icons */
.lm0-icon {
  height: var(--lm0-size, 1em);
  width: var(--lm0-size, 1em);
  display: inline-block;
  color: inherit;
  fill: currentColor;
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}

.lm0-icon--sm {
  --lm0-size: 24px;
}

/* component */
.link-card {
  text-decoration: none;
  color: inherit;
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06),0 1px 2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
}
.link-card:hover {
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025),0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
}

.link-card__footer {
  position: relative;
  overflow: hidden;
  height: 60px;
}
.link-card__footer > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}
.link-card__footer > *:last-child {
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
  opacity: 0;
}

.link-card:hover .link-card__footer > *:first-child {
  -webkit-transform: translateY(-100%);
          transform: translateY(-100%);
  opacity: 0;
}
.link-card:hover .link-card__footer > *:last-child {
  -webkit-transform: translateY(0);
          transform: translateY(0);
  opacity: 1;
}

/* utility classes */
.lm0-text-sm {
  font-size: var(--lm0-text-sm);
}

.lm0-border-top {
  --lm0-border-o: 1;
  border-top: var(--lm0-border-width, 1px) var(--lm0-border-style, solid) hsla(var(--lm0-color-contrast-lower-hsl), var(--lm0-border-o, 1));
}

.lm0-margin-top-auto {
  margin-top: auto;
}

.lm0-margin-top-3xs {
  margin-top: var(--lm0-space-3xs);
}

.lm0-color-contrast-low {
  --lm0-color-o: 1;
  color: hsla(var(--lm0-color-contrast-low-hsl), var(--lm0-color-o, 1));
}

.lm0-color-contrast-higher {
  --lm0-color-o: 1;
  color: hsla(var(--lm0-color-contrast-higher-hsl), var(--lm0-color-o, 1));
}

.lm0-font-semibold {
  font-weight: 600;
}

.lm0-text-lg {
  font-size: var(--lm0-text-lg);
}

.lm0-line-height-xs {
  line-height: 1.1;
}

.lm0-color-primary {
  --lm0-color-o: 1;
  color: hsla(var(--lm0-color-primary-hsl), var(--lm0-color-o, 1));
}

.lm0-block {
  display: block;
}

.lm0-items-center {
  align-items: center;
}

.lm0-gap-xs {
  gap: var(--lm0-space-xs);
}

.lm0-flex-wrap {
  flex-wrap: wrap;
}

.lm0-flex {
  display: flex;
}

.lm0-padding-md {
  padding: var(--lm0-space-md);
}

.lm0-radius-md {
  border-radius: 0.25em;
}

.lm0-bg-light {
  --lm0-bg-o: 1;
  background-color: hsla(var(--lm0-color-bg-light-hsl), var(--lm0-bg-o, 1));
}

.lm0-flex-column {
  flex-direction: column;
}

.lm0-border-contrast-lower {
  --lm0-border-o: 1;
  border-color: hsla(var(--lm0-color-contrast-lower-hsl), var(--lm0-border-o, 1));
}`
  }
];
