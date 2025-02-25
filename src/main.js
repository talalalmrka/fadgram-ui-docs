import Alpine from "alpinejs";
import _ from 'lodash';
import { initFadgramUI } from "fadgram-ui/helpers";
import { FadgramTheme } from "fadgram-ui/theme.js";
import pkg from 'fadgram-ui/package.json' assert { type: 'json' };

import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";

document.addEventListener('DOMContentLoaded', () => {
  initFadgramUI();
});
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
        id: "buttons",
        icon: "bi-square",
        label: "Buttons",
        url: "button.html",
      },
      {
        id: "dropdowns",
        icon: "bi-menu-button",
        label: "Dropdowns",
        url: "dropdown.html",
      },
      {
        id: "forms",
        icon: "bi-ui-check",
        label: "Forms",
        url: "form.html",
      },
      {
        id: "cards",
        icon: "bi-card-heading",
        label: "Cards",
        url: "card.html",
      },
      {
        id: "icons",
        icon: "bi-emoji-neutral",
        label: "Icons",
        url: "icon.html",
      },
      {
        id: "navbars",
        icon: "bi-segmented-nav",
        label: "Navbar",
        url: "navbar.html",
      },
      {
        id: "badges",
        icon: "bi-tag-fill",
        label: "Badges",
        url: "badge.html",
      },
      {
        id: "progress",
        icon: "bi-bar-chart",
        label: "Progress",
        url: "progress.html",
      },
      {
        id: "drawers",
        icon: "bi-layout-sidebar-inset",
        label: "Drawer (offcanvas)",
        url: "drawer.html",
      },
      {
        id: "alerts",
        icon: "bi-info-square",
        label: "Alerts",
        url: "alert.html",
      },
      {
        id: "tables",
        icon: "bi-table",
        label: "Tables",
        url: "table.html",
      },
      {
        id: "shadows",
        icon: "",
        label: "Shadows",
        url: "shadow.html",
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
      /*['@click.prevent']() {
        //console.log('url', this.$el.href);
        this.loadPage(this.$el.href);
      },*/
      [':class']() {
        //console.log(this.$el.href);
        return {
          'sidebar-link': true,
          //'active': this.$el.hash === this.currentPageHash,
        };
      },
    },
    async loadPage() {
  if (this.currentPageUrl) {
    try {
      const response = await fetch(this.currentPageUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.content = await response.text();
      document.title = `${this.currentPage.label} | FadgramUI`;
      setTimeout(function () {
        initFadgramUI();
        Prism.highlightAll();
      }, 100);
    } catch (error) {
      console.error('Failed to load page:', error);
      this.content = 'Failed to load content. Please try again later.';
    }
  }
},
    get colors() {
      let filteredColors = _.pickBy(FadgramTheme().colors, (shades) => _.isObject(shades) && !_.isEmpty(shades));
      filteredColors = _.pickBy(
        _.mapValues(filteredColors, (shades) => _.omit(shades, 'DEFAULT')),
        (shades) => _.isObject(shades) && !_.isEmpty(shades)
      );
      return filteredColors;
    },
    get sizes() {
      return [
        'xs',
        'sm',
        'default',
        'lg',
        'xl'
      ];
    },
    shadeClassName(color, shade) {
      return 'bg-' + color + '-' + shade;
    },
    drawerPositionClassName(position) {
      return 'drawer-' + position;
    },
    drawerPositionId(position) {
      return 'drawer-position-' + position;
    },
    drawerPositionHash(position) {
      return '#' + this.drawerPositionId(position);
    },
    drawerColorId(color) {
      return 'drawer-color-' + color;
    },
    drawerColorHash(color) {
      return '#' + this.drawerColorId(color);
    },
    shadowClassName(size){
const className = `shadow-${size}`;
return className;},
    get firstUrl() {
      const sidebar = document.getElementById('main-drawer');
      const sidebarBody = sidebar.querySelector('.drawer-body');
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
    init() {
      this.initDefaultPage();
      const hash = window.location.hash.substring(1);
      this.loadPage();
      this.addHashListener();
    },
  }));
});

// Start Alpine
window.Alpine = Alpine;
Alpine.start();

