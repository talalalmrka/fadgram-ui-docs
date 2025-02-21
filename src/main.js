import './style.css'
import _ from 'lodash';
import 'fadgram-ui/helpers/index.js';
import { FadgramTheme } from 'fadgram-ui/theme.js';
import Alpine from 'alpinejs';

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

