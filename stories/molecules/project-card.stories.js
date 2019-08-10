import React from 'react';
import {storiesOf} from '@storybook/react';

import ProjectCard from '../../src/components/molecules/ProjectCard';

const stories = storiesOf('Molecules|ProjectCard', module);

stories.add('default', () => (
  <ProjectCard
    title="developers-blog"
    description="Every developer needs a simple blog"
    language="Javascript"
    forks={7689}
    stars={1234}
  />
));

stories.add('with link', () => (
  <ProjectCard
    title="developers-blog"
    description="Every developer needs a simple blog"
    language="Javascript"
    forks={7689}
    stars={1234}
    link="http://google.fr"
  />
));

stories.add('no forks 😢', () => (
  <ProjectCard
    title="developers-blog"
    description="Every developer needs a simple blog"
    language="Javascript"
    stars={1234}
  />
));

stories.add('no stars 😢', () => (
  <ProjectCard
    title="developers-blog"
    description="Every developer needs a simple blog"
    language="Javascript"
    forks={7689}
  />
));

stories.add('nothing 😢', () => (
  <ProjectCard
    title="developers-blog"
    description="Every developer needs a simple blog"
    language="Javascript"
  />
));

