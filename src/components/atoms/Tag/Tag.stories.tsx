import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tag } from './Tag';
import { Icon } from '../Icon';

const stories = storiesOf('Atoms|Tag', module);

stories.add('default', () => <Tag>HTML / CSS</Tag>);
stories.add('+ with icon', () => {
  const icon = <Icon icon="code" title="Language" />;

  return <Tag icon={icon}>Javascript</Tag>;
});
