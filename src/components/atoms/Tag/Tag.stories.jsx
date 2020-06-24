import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code } from "react-feather";

import Tag from './Tag';

const stories = storiesOf('Atoms|Tag', module);

stories.add('default', () => <Tag>HTML / CSS</Tag>);
stories.add('+ with icon', () => {
  const icon = <Code className="icon" aria-label="Language" />;

  return <Tag icon={icon}>Javascript</Tag>;
});
