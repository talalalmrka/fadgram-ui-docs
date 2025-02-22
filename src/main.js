import Alpine from "alpinejs";
import _ from 'lodash';
import "fadgram-ui/helpers";
import { FadgramTheme } from "fadgram-ui/theme";
import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";
document.addEventListener('alpine:init', () => {
  Alpine.data('fadgramUiDocs', () => ({
    currentUrl: "",
    content: 'Click a link to load content',
    sidebarLink: {
      ['@click.prevent']() {
        //console.log('url', this.$el.href);
        this.loadPage(this.$el.href);
      },
      [':class']() {
        return {
          'sidebar-link': true,
          'active': this.currentUrl == this.$el.href,
        };
      },
    },
    async loadPage(url) {
      const response = await fetch(url);
      this.content = await response.text();
      this.currentUrl = url;
      localStorage.setItem("currentUrl", this.currentUrl);
      //Prism.highlightAll();
      setTimeout(function () {
        Prism.highlightAll();
      }, 200);

    },
    get colors() {
      let filteredColors = _.pickBy(FadgramTheme.colors, (shades) => _.isObject(shades) && !_.isEmpty(shades));
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
    get firstUrl() {
      const sidebar = document.getElementById('main-drawer');
      const sidebarBody = sidebar.querySelector('.drawer-body');
      const firstNavLink = sidebarBody.querySelector('.nav-link');
      return firstNavLink ? firstNavLink.href : false;
    },
    init() {
      const savedUrl = localStorage.getItem("currentUrl");
      this.currentUrl = savedUrl ?? this.firstUrl;
      if (this.currentUrl) {
        this.loadPage(this.currentUrl);
      }
    },
  }));
});

// Start Alpine
window.Alpine = Alpine;
Alpine.start();

