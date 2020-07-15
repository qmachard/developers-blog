import React from 'react';
import { storiesOf } from '@storybook/react';

import About from './About';

const stories = storiesOf('Molecules/About', module);

stories.add('default', () => <About html={'<p>Lorem ipsum dolor.</p>'} />);
