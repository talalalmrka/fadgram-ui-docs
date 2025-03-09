import beautify from 'js-beautify';
import Prism from "prismjs";
export class SourceCode {
    constructor(element) {
        if (element.parentNode.classList.contains('code-container')) {
            return;
        }
        this.element = element;
        this.container = null;
        this.toolbar = null;
        this.fileNameElement = null;
        this.copyButton = null;
        this.copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/></svg>';
        this.copiedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16"><path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>';
        this._createContainer();
        this._createToolbar();
        this._createFileName();
        this._createCopyButton();
        //this._createBlock();
        this._addListeners();
        this.element.classList.remove('has-code');
    }

    _createContainer() {
        const element = this.element;
        const container = document.createElement('div');
        container.className = 'code-container';
        element.parentNode.replaceChild(container, element);
        container.appendChild(element);
        this.container = container;
    }
    _createToolbar() {
        const toolbar = document.createElement('div');
        toolbar.className = 'code-toolbar';
        this.toolbar = toolbar;
        this.container.prepend(toolbar);
    }
    _createFileName() {
        const fileNameElement = document.createElement('span');
        fileNameElement.className = 'code-file-name';
        fileNameElement.textContent = this.element.dataset.fileName ?? '';
        this.fileNameElement = fileNameElement;
        this.toolbar.appendChild(fileNameElement);
    }
    _createCopyButton() {
        const copyButton = document.createElement('button');
        copyButton.className = "btn-copy-code";
        copyButton.innerHTML = this.copyIcon;
        this.copyButton = copyButton;
        this.toolbar.appendChild(copyButton);
    }
    _addListeners() {
        this.copyButton.addEventListener('click', (e) => this.copy(e));
    }
    copy(e) {
        e.preventDefault();
        const source = this.element.textContent;
        console.log(source);
        navigator.clipboard.writeText(source);
        this.copyButton.innerHTML = this.copiedIcon;
        setTimeout(() => this.copyButton.innerHTML = this.copyIcon, 2000);
    }
    static sourceType(element) {
        return typeof element.dataset.source !== 'undefined' ? element.dataset.source : 'outer';
    }
    static language(element) {
        return typeof element.dataset.language !== 'undefined' ? element.dataset.language : 'html';
    }
    static fileName(element) {
        const filename = typeof element.dataset.fileName !== 'undefined' ? element.dataset.fileName : null;
        return filename ?? this.language(element);
    }

    static sourceCode(element) {
        let clone = element.cloneNode(true);

        let defaultExcludeSelectors = [
            'template',
        ];
        let defaultExcludeClasses = [
            "has-code",
            "inited"
        ];
        let defaultExcludeAtts = [
            "data-exclude-classes",
            "data-exclude-atts",
            "data-exclude-selectors",
            "data-source",
            "x-data",
            "x-text",
            "x-bind",
            "x-on:click",
            ":class",
        ];

        let userExcludeSelectors = (element.getAttribute('data-exclude-selectors') || "").split(/\s+/).filter(Boolean);
        let excludeSelectors = [...defaultExcludeSelectors, ...userExcludeSelectors];
        let userExcludeClasses = (element.getAttribute('data-exclude-classes') || "").split(/\s+/).filter(Boolean);
        let excludeClasses = [...defaultExcludeClasses, ...userExcludeClasses];
        let userExcludeAtts = (element.getAttribute('data-exclude-atts') || "").split(/\s+/).filter(Boolean);
        let excludeAtts = [...defaultExcludeAtts, ...userExcludeAtts];

        //exclude selectors
        excludeSelectors.forEach(selector => {
            const elements = clone.querySelectorAll(selector);
            if (elements) {
                elements.forEach(element => {
                    element.remove();
                });
            }
        });

        //exclude classes
        clone.classList.remove(...excludeClasses);
        if (clone.className.trim() === "") {
            clone.removeAttribute('class');
        }

        //exclude atts
        excludeAtts.forEach(attr => clone.removeAttribute(attr));
        clone.querySelectorAll('*').forEach(child => {
            child.classList.remove(...excludeClasses);
            excludeAtts.forEach(attr => child.removeAttribute(attr));
        });

        let sourceCode = this.sourceType(element) === 'inner' ? clone.innerHTML : clone.outerHTML;
        sourceCode = sourceCode.trim();
        switch (this.language(element)) {
            case "html":
                return beautify.html(sourceCode);
            case "css":
                return beautify.css(sourceCode);
            case "javascript":
            case "js":
                return beautify.js(sourceCode);
            default:
                return beautify.html(sourceCode);
        }
    }
    static fromElement(element) {
        if (element.classList.contains('has-code')) {
            const pre = document.createElement('pre');
            pre.className = "code-pre inited";
            const fileName = this.fileName(element);
            if (fileName) {
                pre.dataset.fileName = fileName;
            }
            const language = this.language(element);
            if (language) {
                pre.dataset.language = language;
            }
            const code = document.createElement('code');
            code.classList.add(`language-${this.language(element)}`);
            code.textContent = this.sourceCode(element);
            pre.appendChild(code);
            element.insertAdjacentElement('afterend', pre);
            element.classList.remove('has-code');
        }
    }
    static wrap(element) {
        if (!element) return;
        if (element.parentNode && element.parentNode.classList.contains('code-container')) {
            return;
        }
        const container = document.createElement("div");
        container.classList.add("code-container");
        const pre = document.createElement('pre');
        pre.className = "code-pre inited";
        const code = document.createElement('code');
        code.classList.add(`language-${this.language}`);
        code.textContent = this.sourceCode;
        pre.appendChild(code);
        this.container.appendChild(pre);
        element.parentNode.replaceChild(container, element);
        container.appendChild(element);
    }
    static init() {
        document.querySelectorAll('.has-code').forEach(element => {
            SourceCode.fromElement(element);
        });
        document.querySelectorAll('pre').forEach(element => {
            new SourceCode(element);
            //SourceCode.wrap(element);
        });
        Prism.highlightAll();
    }
}