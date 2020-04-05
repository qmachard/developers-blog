import React from 'react';
import { storiesOf } from '@storybook/react';

import Profile from './Profile';

const stories = storiesOf('Molecules|Profile', module);

const background = 'https://images.unsplash.com/photo-1562683855-f85c2a6446b6?w=1701&q=80';

stories.add('default', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
    website="http://www.quentinmachard.fr/"
    location="Rennes, France"
    background={background}
  />
));

stories.add('without profession', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    website="http://www.quentinmachard.fr/"
    location="Rennes, France"
    background={background}
  />
));

stories.add('without website', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
    location="Rennes, France"
    background={background}
  />
));

stories.add('without location', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
    background={background}
  />
));

stories.add('without background', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
    website="http://www.quentinmachard.fr/"
    location="Rennes, France"
  />
));
