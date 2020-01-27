import * as React from 'react';
import {storiesOf} from '@storybook/react';

import { Profile } from "./Profile";

const stories = storiesOf('Molecules|Profile', module);

stories.add('default', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
    website="http://www.quentinmachard.fr/"
    location="Rennes, France"
  />
));

stories.add('without profession', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    website="http://www.quentinmachard.fr/"
    location="Rennes, France"
  />
));

stories.add('without website', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
    location="Rennes, France"
  />
));

stories.add('without location', () => (
  <Profile
    name="Quentin Machard"
    username="qmachard"
    image="https://avatars2.githubusercontent.com/u/11388211"
    profession="Front-End Developer"
  />
));
