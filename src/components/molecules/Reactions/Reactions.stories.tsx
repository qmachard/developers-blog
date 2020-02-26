import React from 'react';
import { storiesOf } from '@storybook/react';

import { Reactions } from './Reactions';

const stories = storiesOf('Molecules|Reactions', module);

stories.add('default', () => (
  <Reactions
    reactions={{
      '+1': 25,
      tada: 29,
      heart: 18,
      rocket: 5,
    }}
  />
));

stories.add('with selected reactions', () => (
  <Reactions
    reactions={{
      '+1': 25,
      tada: 29,
      heart: 18,
      rocket: 5,
    }}
    selected={['tada', 'heart']}
  />
));

stories.add('no reactions', () => <Reactions reactions={{}} />);
