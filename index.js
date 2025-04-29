import plugin from 'tailwindcss/plugin';
import { flexComponents } from './components/flex.js';
import { absoluteComponents } from './components/absolute.js';
import { imageSizeComponents } from './components/image-size.js';
import { listStyleNoneComponents } from './components/list-style-none.js';
import { transitionComponents } from './components/transition.js';
import { loadingComponents } from './components/loading.js';
import { flexGridTemplateComponents } from './components/flex-grid-template.js';
import { skeletonComponents } from './components/skeleton.js';

export default plugin(function ({ addComponents }) {
  addComponents({
    ...flexComponents,
    ...absoluteComponents,
    ...imageSizeComponents,
    ...listStyleNoneComponents,
    ...transitionComponents,
    ...loadingComponents,
    ...flexGridTemplateComponents,
    ...skeletonComponents
  });
});