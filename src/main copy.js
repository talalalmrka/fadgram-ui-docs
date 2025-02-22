import _ from 'lodash';
import "alpinejs";
//import 'fadgram-ui/helpers/index.js';
import "../../example-app/fadgram-ui/helpers";
//import { FadgramTheme } from 'fadgram-ui/theme.js';
import { FadgramTheme } from "../../example-app/fadgram-ui/theme";
import Alpine from 'alpinejs';
//import "prismjs";
//import "prismjs/themes/prism-okaidia.min.css";
//import "prismjs/components/prism-javascript";
//import "prismjs/components/prism-css";
import './style.css'

// Load Prism components dynamically
const loadPrismLanguages = async () => {
  //await import("prismjs/components/prism-clike");
  //await import("prismjs/components/prism-javascript");
  //await import("prismjs/components/prism-css");
  //await import("prismjs/components/prism-html");
};

// Highlight all code blocks after loading the languages
document.addEventListener("DOMContentLoaded", async () => {
  //await loadPrismLanguages();
  //Prism.highlightAll();
});


window.Alpine = Alpine;

Alpine.data('design', () => ({
  get colors() {
    let filteredColors = _.pickBy(FadgramTheme.colors, (shades) => _.isObject(shades) && !_.isEmpty(shades));
    filteredColors = _.pickBy(
      _.mapValues(filteredColors, (shades) => _.omit(shades, 'DEFAULT')),
      (shades) => _.isObject(shades) && !_.isEmpty(shades)
    );
    return filteredColors;
  },
  shadeClassName(color, shade) {
    return 'bg-' + color + '-' + shade;
  },
}));
Alpine.start();

