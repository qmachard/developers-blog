import React from 'react';
import {storiesOf} from '@storybook/react';

import ProjectCard from '../../src/components/molecules/ProjectCard/ProjectCard';

const stories = storiesOf('Molecules|ProjectCard', module);

stories.add('default', () => <ProjectCard title="developers-blog" description="Every developer needs a simple blog"/>);
