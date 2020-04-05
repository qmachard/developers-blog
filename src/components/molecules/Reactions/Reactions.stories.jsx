import React from 'react';
import { storiesOf } from '@storybook/react';

import Reactions from './Reactions';

const stories = storiesOf('Molecules|Reactions', module);

stories.add('default', () => (
  <Reactions
    issue="10"
    reactions={{
      '+1': 25,
      hooray: 29,
      heart: 18,
      rocket: 5,
    }}
  />
));

stories.add('with 99+', () => (
  <Reactions
    issue="10"
    reactions={{
      '+1': 120,
      hooray: 99,
      heart: 567,
      rocket: 100,
    }}
  />
));

stories.add('with only 2 reactions', () => (
  <Reactions
    issue="10"
    reactions={{
      '+1': 25,
      hooray: 29,
    }}
  />
));

stories.add('no reactions', () => <Reactions issue="10" reactions={{}} />);
