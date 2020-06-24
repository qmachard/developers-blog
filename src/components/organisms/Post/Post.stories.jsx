import React from 'react';
import { storiesOf } from '@storybook/react';

import Post from './Post';

import samplePost from './sample-post';

const stories = storiesOf('Organisms|Post', module);

stories.add('default', () => (
  <Post
    title="Concevoir une API REST"
    cover="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450"
    html={samplePost}
    excerpt="Techniques de base pour designer une API, en utilisant le standard REST"
    tags={['css', 'html', 'accessibility']}
  />
));
