import React from 'react';
import { storiesOf } from '@storybook/react';

import samplePost from './sample-post';

import { PostPage } from 'components/pages/PostPage/PostPage';

const stories = storiesOf('Pages|PostPage', module);

const post = {
  title: 'Concevoir une API REST',
  path: '/concevoir-une-api-rest',
  cover: 'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450',
  html: samplePost,
  excerpt: 'Techniques de base pour designer une API, en utilisant le standard REST',
  tags: ['css', 'html', 'accessibility'],
};

const author = {
  avatar: 'https://avatars2.githubusercontent.com/u/11388211',
  name: 'Quentin Machard',
  username: 'qmachard',
};

const reactions = {
  '+1': 100,
  heart: 100,
  tada: 100,
  rocket: 100,
};

const selectedReactions = ['heart'];

stories.add('default', () => <PostPage post={post} author={author} />);
stories.add('with reactions', () => (
  <PostPage post={post} author={author} reactions={reactions} selectedReactions={selectedReactions} />
));
