import React from 'react';
import { storiesOf } from '@storybook/react';

import samplePost from './sample-post';

import { PostPage } from 'components/pages/PostPage/PostPage';
import { Author } from 'components/molecules/Author';

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
  image: 'https://avatars2.githubusercontent.com/u/11388211',
  name: 'Quentin Machard',
  username: 'qmachard',
};

stories.add('default', () => <PostPage post={post} author={author} />);
