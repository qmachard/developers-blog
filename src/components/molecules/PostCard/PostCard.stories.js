import React from 'react';
import {storiesOf} from '@storybook/react';

import PostCard from "./PostCard";

const stories = storiesOf('Molecules|PostCard', module);

stories.add('default', () => (
  <PostCard
    title="My awesome post"
    description="Every developer needs a simple blog"
    image="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450"
  />
));

stories.add('with link', () => (
  <PostCard
    title="My awesome post"
    description="Every developer needs a simple blog"
    image="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450"
    link="http://google.fr"
  />
));

stories.add('without image', () => (
  <PostCard
    title="My awesome post"
    description="Every developer needs a simple blog"
  />
));

stories.add('without description', () => (
  <PostCard
    title="My awesome post"
    image="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450"
  />
));
