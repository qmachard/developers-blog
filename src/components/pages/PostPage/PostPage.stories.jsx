import React from 'react';
import { storiesOf } from '@storybook/react';

import samplePost from './sample-post';

import PostPage from './PostPage';

const profile = {
  username: 'qmachard',
  name: 'Quentin Machard',
  image: 'https://avatars2.githubusercontent.com/u/11388211',
  background: 'https://images.unsplash.com/photo-1550647134-b512b01d62a2?h=1500',
  profession: 'Front-End Developer',
  location: 'Rennes, France',
};

const stories = storiesOf('Pages|PostPage', module);

const post = {
  id: '10',
  title: 'Concevoir une API REST',
  path: '/concevoir-une-api-rest',
  cover: 'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450',
  html: samplePost,
  excerpt: 'Techniques de base pour designer une API, en utilisant le standard REST',
  tags: ['css', 'html', 'accessibility'],
};

const reactions = {
  '+1': 100,
  heart: 100,
  tada: 100,
  rocket: 100,
};

stories.add('default', () => <PostPage profile={profile} post={post} reactions={{}} />);
stories.add('with reactions', () => <PostPage profile={profile} post={post} reactions={reactions} />);
