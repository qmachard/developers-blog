import React from 'react';
import {storiesOf} from '@storybook/react';

import CardsList from "../../src/components/organisms/CardsList";
import ProjectCard from "../../src/components/molecules/ProjectCard";
import PostCard from '../../src/components/molecules/PostCard';

const stories = storiesOf('Organisms|CardsList', module);

stories.add('ProjectCards list', () => (
  <CardsList
    title="Work."
  >
    <ProjectCard title="My awesome project" description="This is a wonderful project" language="Javascript" link="#"/>
    <ProjectCard title="My awesome project" description="This is a wonderful project" language="Javascript" forks={1250} link="#"/>
    <ProjectCard title="My awesome project" description="This is a wonderful project" language="Javascript" stars={1658} link="#"/>
    <ProjectCard title="My awesome project" description="This is a wonderful project" language="Javascript" forks={1364} stars={1156} link="#"/>
  </CardsList>
));

stories.add('PostCards list', () => (
  <CardsList
    title="Blog."
  >
    <PostCard image="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450" title="My awesome post" link="#"/>
    <PostCard title="My awesome post" description="This is a wonderful project" link="#"/>
    <PostCard image="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450" title="My awesome post" description="This is a wonderful post" link="#"/>
    <PostCard image="https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450" title="My awesome post" description="This is a wonderful post" link="#"/>
  </CardsList>
));
