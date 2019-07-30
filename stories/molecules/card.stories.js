import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../../src/components/molecules/Card';

const stories = storiesOf('Molecules|Card', module);

const image = {
  src: 'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450',
  alt: 'This is an image',
};

stories.add('default', () => <Card title="This is a card"/>);
stories.add('with image', () => <Card title="This is a card" image={image}/>);
