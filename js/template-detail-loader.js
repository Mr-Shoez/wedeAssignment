import { templates } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const urlParams = new URLSearchParams(window.location.search);
    const templateId = urlParams.get("id");
    const templateData = templates.find((t) => t.id === templateId);

    if (templateData) {
        document.title = `WebDev Hub - ${templateData.title}`;

        // --- NEW: Build the Interactive Split-Pane Layout ---
        mainContent.innerHTML = `
            <section class="template-detail-section">
                <div class="container detail-header-container">
                    <div class="detail-header">
                        <h1 id="template-title">${templateData.title}</h1>
                        <p id="template-description">${templateData.description}</p>
                    </div>
                    <div class="detail-meta-actions">
                         <div class="card-meta">
                            <span class="tag">${templateData.category}</span>
                            <span class="tag">${templateData.type}</span>
                            <span class="tag">${templateData.difficulty}</span>
                        </div>
                        <button class="btn btn-primary" id="download-btn">Download Template</button>
                    </div>
                </div>

                <div class="interactive-playground">
                    <div class="playground-preview-pane" id="preview-pane">
                        <div class="viewport-controls">
                            <button class="viewport-btn" data-width="100%" title="Desktop"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 16H3V4h18m0-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z"/></svg></button>
                            <button class="viewport-btn" data-width="768px" title="Tablet"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 18H5V6h14m1-16H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z"/></svg></button>
                            <button class="viewport-btn" data-width="425px" title="Mobile"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10v14Z"/></svg></button>
                        </div>
                        <iframe id="live-preview-iframe" title="Template Live Preview"></iframe>
                    </div>
                    <div class="playground-resizer" id="resizer"></div>
                    <div class="playground-code-pane" id="code-pane">
                        <div class="code-tabs">
                            <button class="tab-btn active" data-tab="html">HTML</button>
                            <button class="tab-btn" data-tab="css">CSS</button>
                            <button class="tab-btn" data-tab="js">JS</button>
                        </div>
                        <div class="code-panels">
                            <div id="html-panel" class="code-panel active">
                                <button class="copy-btn">Copy HTML</button>
                                <pre><code class="language-html"></code></pre>
                            </div>
                            <div id="css-panel" class="code-panel">
                                <button class="copy-btn">Copy CSS</button>
                                <pre><code class="language-css"></code></pre>
                            </div>
                            <div id="js-panel" class="code-panel">
                                <button class="copy-btn">Copy JS</button>
                                <pre><code class="language-javascript"></code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // --- Populate Content and Add Interactivity ---

        // 1. Populate Iframe and Code Blocks
        const iframe = document.getElementById('live-preview-iframe');
        const iframeSrcDoc = `
            <!DOCTYPE html><html><head><style>${templateData.css}</style></head>
            <body>${templateData.html}<script>${templateData.js}<\/script></body></html>`;
        iframe.srcdoc = iframeSrcDoc;

        document.querySelector("#html-panel code").textContent = templateData.html;
        document.querySelector("#css-panel code").textContent = templateData.css;
        document.querySelector("#js-panel code").textContent = templateData.js;

        // 2. Download & Copy Functionality (No changes needed here)
        const downloadBtn = document.getElementById('download-btn');
        downloadBtn.addEventListener('click', () => {
             const fullHtmlToDownload = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${templateData.title}</title><style>${templateData.css}</style></head><body>${templateData.html}<script>${templateData.js}<\/script></body></html>`;
            const blob = new Blob([fullHtmlToDownload], { type: 'text/html' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `${templateData.title.toLowerCase().replace(/\s+/g, '-')}.html`;
            a.click();
            URL.revokeObjectURL(a.href);
        });

        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const codeToCopy = btn.nextElementSibling.querySelector('code').textContent;
                navigator.clipboard.writeText(codeToCopy).then(() => {
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => { btn.textContent = originalText; }, 2000);
                });
            });
        });

        // 3. Tab Switching Logic (No changes needed here)
        const tabButtons = document.querySelectorAll(".tab-btn");
        const codePanels = document.querySelectorAll(".code-panel");
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                codePanels.forEach((panel) => panel.classList.remove("active"));
                button.classList.add("active");
                const tab = button.dataset.tab;
                document.getElementById(`${tab}-panel`).classList.add("active");
            });
        });

        // --- NEW: Logic for Interactive Playground ---
        const previewPane = document.getElementById('preview-pane');
        const codePane = document.getElementById('code-pane');
        const resizer = document.getElementById('resizer');
        
        // Resizer Logic
        let isResizing = false;
        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', () => {
                isResizing = false;
                document.removeEventListener('mousemove', handleMouseMove);
            });
        });

        function handleMouseMove(e) {
            if (!isResizing) return;
            const totalWidth = document.querySelector('.interactive-playground').offsetWidth;
            const newCodeWidth = totalWidth - e.clientX;
            const previewWidth = totalWidth - newCodeWidth;
            
            if (previewWidth > 250 && newCodeWidth > 250) { // Set minimum widths
                codePane.style.width = `${newCodeWidth}px`;
                previewPane.style.width = `${previewWidth}px`;
            }
        }

        // Viewport Toggles Logic
        const viewportButtons = document.querySelectorAll('.viewport-btn');
        const iframeContainer = document.getElementById('live-preview-iframe');
        viewportButtons.forEach(button => {
            button.addEventListener('click', () => {
                iframeContainer.style.width = button.dataset.width;
            });
        });

    } else {
        // --- ERROR HANDLING (No changes needed) ---
        document.title = "WebDev Hub - Template Not Found";
        mainContent.innerHTML = `<section class="not-found-section"><div class="container"><h1>404 - Template Not Found</h1><p>Sorry, we couldn't find that template.</p><a href="templates.html" class="btn btn-primary">Back to Templates</a></div></section>`;
    }
});