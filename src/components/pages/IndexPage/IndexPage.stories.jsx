import React from 'react';
import { storiesOf } from '@storybook/react';

import IndexPage from './IndexPage';

const stories = storiesOf('Pages|IndexPage', module);

const profile = {
  username: 'qmachard',
  name: 'Quentin Machard',
  image: 'https://avatars2.githubusercontent.com/u/11388211',
  background: 'https://images.unsplash.com/photo-1550647134-b512b01d62a2?h=1500',
  profession: 'Front-End Developer',
  location: 'Rennes, France',
};

const posts = [
  {
    id: '7f80170a-01ae-56a5-bae0-37468e438ae9',
    description:
      'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mollis neque id ultricies. Duis semper mollis neque a…',
    title: 'My first blog post',
    image: 'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450',
    link: '#',
  },
  {
    id: '7a33176e-3f66-5fd3-9c47-1a499f874f60',
    description: '',
    title: 'My second blog post',
    image: 'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450',
    link: '#',
  },
];

const projects = [
  {
    id: '1',
    title: 'developers-blog',
    description: 'Every developer needs a simple blog',
    language: 'Javascript',
    forks: 7689,
    stars: 1234,
    link: '#',
  },
  {
    id: '2',
    title: 'developers-blog',
    description: 'Every developer needs a simple blog',
    language: 'Javascript',
    forks: 7689,
    stars: 1234,
    link: '#',
  },
];

const about = '<p>Lorem ipsum dolor</p>';

stories.add('default', () => <IndexPage about={about} profile={profile} posts={posts} projects={projects} />);

stories.add('no about', () => <IndexPage projects={projects} posts={posts} />);

stories.add('no post', () => <IndexPage about={about} profile={profile} posts={[]} projects={projects} />);

stories.add('no project', () => <IndexPage about={about} profile={profile} posts={posts} projects={[]} />);
