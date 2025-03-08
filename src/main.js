import Alpine from "alpinejs";
import _ from 'lodash';
import { initFadgramUI } from "fadgram-ui/helpers";
import { SourceCode } from "./source-code";
import pkg from 'fadgram-ui/package.json' assert { type: 'json' };
import Toast from "fadgram-ui/helpers/toast";
const initialize = () => {
    initFadgramUI();
    SourceCode.init();
};

document.addEventListener('alpine:init', () => {
    Alpine.data('fadgramUiDocs', () => ({
        get version() {
            return `v${pkg.version}`;
        },
        pages: [
            {
                id: "installation",
                icon: "bi-gear-wide-connected",
                label: "Installation",
                url: "install.html",
            },
            {
                id: "typograohy",
                icon: "bi-type",
                label: "Typography",
                url: "typography.html",
            },
            {
                id: "colors",
                icon: "bi-palette",
                label: "Colors",
                url: "colors.html",
            },
            {
                id: "background",
                icon: "bi-palette",
                label: "Background color",
                url: "background.html",
            },
            {
                id: "buttons",
                icon: "bi-square",
                label: "Buttons",
                url: "buttons.html",
            },
            {
                id: "dropdowns",
                icon: "bi-menu-button",
                label: "Dropdowns",
                url: "dropdowns.html",
            },
            {
                id: "forms",
                icon: "bi-ui-checks",
                label: "Forms",
                url: "forms.html",
            },
            {
                id: "cards",
                icon: "bi-card-heading",
                label: "Cards",
                url: "cards.html",
            },
            {
                id: "icons",
                icon: "bi-emoji-neutral",
                label: "Icons",
                url: "icons.html",
            },
            {
                id: "navbars",
                icon: "bi-segmented-nav",
                label: "Navbar",
                url: "navbars.html",
            },
            {
                id: "badges",
                icon: "bi-tag-fill",
                label: "Badges",
                url: "badges.html",
            },
            {
                id: "progress",
                icon: "bi-bar-chart",
                label: "Progress bar",
                url: "progressbars.html",
            },
            {
                id: "offcanvas",
                icon: "bi-layout-sidebar-inset",
                label: "Offcanvas",
                url: "offcanvas.html",
            },
            {
                id: "alerts",
                icon: "bi-info-square",
                label: "Alerts",
                url: "alerts.html",
            },
            {
                id: "tables",
                icon: "bi-table",
                label: "Tables",
                url: "tables.html",
            },
            {
                id: "shadows",
                icon: "bi-cloud",
                label: "Shadows",
                url: "shadows.html",
            },
            {
                id: "tooltips",
                icon: "bi-chat-left-dots",
                label: "Tooltips",
                url: "tooltips.html",
            },
            {
                id: "modal",
                icon: "bi-window",
                label: "Modal",
                url: "modals.html",
            },
            {
                id: "listgroup",
                icon: "bi-list",
                label: "List Group",
                url: "listgroup.html",
            },
            {
                id: "ratingbars",
                icon: "bi-star-fill",
                label: "Rating bar",
                url: "ratingbars.html",
            },
            {
                id: "tabs",
                icon: "bi-folder",
                label: "Tabs",
                url: "tabs.html",
            },
            {
                id: "toasts",
                icon: "bi-bell",
                label: "Toast",
                url: "toasts.html",
            },
        ],
        colors: [
            'primary',
            'secondary',
            'light',
            'dark',
            'red',
            'orange',
            'amber',
            'yellow',
            'lime',
            'green',
            'emerald',
            'teal',
            'cyan',
            'sky',
            'blue',
            'indigo',
            'violet',
            'purple',
            'fuchsia',
            'pink',
            'rose',
            'slate',
            'gray',
            'zinc',
            'neutral',
            'stone',
        ],
        shades: [
            50,
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
            950,
        ],
        sizes: [
            'xs',
            'sm',
            'default',
            'lg',
            'xl'
        ],
        shadowSizes: [
            {
                label: "xs",
                class: "shadow-xs",
            },
            {
                label: "sm",
                class: "shadow-sm",
            },
            {
                label: "Default",
                class: "shadow",
            },
            {
                label: "md",
                class: "shadow-md",
            },
            {
                label: "lg",
                class: "shadow-lg",
            },
            {
                label: "xl",
                class: "shadow-xl",
            },
            {
                label: "2xl",
                class: "shadow-2xl",
            },
        ],
        dropdownPositions: [
            {
                label: 'Dropdown start',
                class: 'dropdown-start',
            },
            {
                label: 'Dropdown center',
                class: 'dropdown-center',
            },
            {
                label: 'Dropdown end',
                class: 'dropdown-end',
            },
            {
                label: 'Dropdown top',
                class: 'dropdown-top',
            },
            {
                label: 'Dropdown top start',
                class: 'dropdown-top dropdown-start',
            },
            {
                label: 'Dropdown top center',
                class: 'dropdown-top dropdown-center',
            },
            {
                label: 'Dropdown top end',
                class: 'dropdown-top dropdown-end',
            },
        ],
        tableTypes: [
            {
                label: "Table Striped",
                class: "table-striped",
            },
            {
                label: "Table border",
                class: "table-border",
            },
            {
                label: "Table border separate",
                class: "table-border-separate",
            },
            {
                label: "Table divide",
                class: "table-divide",
            },
            {
                label: "Table hover",
                class: "table-hover",
            },
            {
                label: "Table rounded",
                class: "table-rounded",
            },
            {
                label: "Table layout auto",
                class: "table-auto",
            },
            {
                label: "Table layout fixed",
                class: "table-fixed",
            },
            {
                label: "Table shadow",
                class: "shadow",
            },
            {
                label: "Table shadow rounded",
                class: "table-rounded shadow",
            },
        ],
        tabsTypes: [
            {
                label: "Basic usage",
                class: "",
            },
            {
                label: "Tabs between",
                class: "tabs-between",
            },
            {
                label: "Tabs center",
                class: "tabs-center",
            },
            {
                label: "Tabs fill",
                class: "tabs-fill",
            },
            {
                label: "Tabs pills",
                class: "tabs-pills",
            },
            {
                label: "Tabs pills between",
                class: "tabs-pills tabs-between",
            },
            {
                label: "Tabs pills center",
                class: "tabs-pills tabs-center",
            },
            {
                label: "Tabs pills fill",
                class: "tabs-pills tabs-fill",
            },
            {
                label: "Tabs vertical",
                class: "tabs-vertical",
            },
            {
                label: "Tabs vertical pills",
                class: "tabs-vertical tabs-pills",
            },
        ],
        toasts: [
            {
                label: "Default toast",
                message: "This is default toast",
                options: {},
            },
            {
                label: "Toast info",
                message: "This is info toast",
                options: {
                    type: "info",
                },
            },
            {
                label: "Toast success",
                message: "This is success toast",
                options: {
                    type: "success",
                },
            },
            {
                label: "Toast warning",
                message: "This is warning toast",
                options: {
                    type: "warning",
                },
            },
            {
                label: "Toast error",
                message: "This is error toast",
                options: {
                    type: "error",
                },
            },
            {
                label: "Toast top start",
                message: "This is top start toast",
                options: {
                    position: "top-start",
                },
            },
            {
                label: "Toast top center",
                message: "This is top center toast",
                options: {
                    position: "top-center",
                },
            },
            {
                label: "Toast top end",
                message: "This is top end toast",
                options: {
                    position: "top-end",
                },
            },
            {
                label: "Toast center center",
                message: "This is center center toast",
                options: {
                    position: "center-center",
                },
            },
            {
                label: "Toast bottom start",
                message: "This is bottom start toast",
                options: {
                    position: "bottom-start",
                },
            },
            {
                label: "Toast bottom center",
                message: "This is bottom center toast",
                options: {
                    position: "bottom-center",
                },
            },
            {
                label: "Toast bottom end",
                message: "This is top end toast",
                options: {
                    position: "bottom-end",
                },
            },
        ],
        currentPage: null,
        get prevPage() {
            const currentIndex = this.pages.findIndex(page => page.id === this.currentPage.id);
            return currentIndex > 0 ? this.pages[currentIndex - 1] : null;
        },
        get nextPage() {
            const currentIndex = this.pages.findIndex(page => page.id === this.currentPage.id);
            return currentIndex < this.pages.length - 1 ? this.pages[currentIndex + 1] : null;
        },
        get currentPageUrl() {
            return _.get(this.currentPage, 'url', false);
        },
        get currentPageHash() {
            return this.currentPage ? `#${this.currentPage.id}` : false;
        },
        getPageHref(page) {
            return `#${page.id}`;
        },
        content: 'Click a link to load content',
        sidebarLink: {
            ['@click']() {
                this.$refs.mainOffcanvas.classList.remove('show');
            },
            [':class']() {
                return {
                    'sidebar-link': true,
                };
            },
        },
        async loadPage() {
            if (this.currentPageUrl) {
                this.content = '<div class="text-center p-4">Loading...</div>';
                try {
                    const response = await fetch(`pages/${this.currentPageUrl}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    this.content = await response.text();
                    document.title = `${this.currentPage.label} | FadgramUI`;
                    setTimeout(function () {
                        initialize();
                    }, 100);
                } catch (error) {
                    console.error('Failed to load page:', error);
                    this.content = 'Failed to load content. Please try again later.';
                }
            }
        },
        shadeClassName(color, shade) {
            return 'bg-' + color + '-' + shade;
        },
        offcanvasPositionClassName(position) {
            return 'offcanvas-' + position;
        },
        offcanvasPositionId(position) {
            return 'offcanvas-position-' + position;
        },
        offcanvasPositionHash(position) {
            return '#' + this.offcanvasPositionId(position);
        },
        offcanvasColorId(color) {
            return 'offcanvas-color-' + color;
        },
        offcanvasColorHash(color) {
            return '#' + this.offcanvasColorId(color);
        },
        shadowClassName(size) {
            const className = `shadow-${size}`;
            return className;
        },
        get firstUrl() {
            const sidebar = document.getElementById('main-offcanvas');
            const sidebarBody = sidebar.querySelector('.offcanvas-body');
            const firstNavLink = sidebarBody.querySelector('.nav-link');
            return firstNavLink ? firstNavLink.href : false;
        },
        initDefaultPage() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const page = this.pages.find(page => page.id === hash);
                if (page) {
                    this.currentPage = page;
                }
            }
            if (!this.currentPage) {
                this.currentPage = this.pages[0];
            }
        },
        addHashListener() {
            window.addEventListener("hashchange", () => {
                const hash = window.location.hash.substring(1);
                const page = this.pages.find(page => page.id === hash);
                if (page) {
                    this.currentPage = page;
                    this.loadPage();
                }
            });
        },
        showToast(message, options) {
            Toast.make(message, options);
        },
        init() {
            this.initDefaultPage();
            const hash = window.location.hash.substring(1);
            this.loadPage();
            this.addHashListener()
            this.$nextTick(() => {
                initialize();
            });

        },
    }));
});

// Start Alpine
window.Alpine = Alpine;
Alpine.start();

