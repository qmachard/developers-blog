import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import './style.css';
import '../src/components/global/Layout/Layout.scss';

setOptions({
  name: 'Developers Blog',
  url: 'https://github.com/qmachard/developers-blog',
  hierarchyRootSeparator: /\|/
});


// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
