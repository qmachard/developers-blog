import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

const stories = storiesOf('Atoms|Card', module);

stories.add('default', () => <Card>This is not a playing card</Card>);
stories.add('with link', () => <Card link>This is not a playing card</Card>);
stories.add('with image', () => (
  <Card>
    <img src="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=300" alt="Test 1" />
  </Card>
));
stories.add('no padding', () => (
  <Card padding={false}>
    <img src="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=300" alt="Test 2" />
  </Card>
));
