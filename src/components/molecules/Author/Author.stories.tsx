import React from 'react';
import { storiesOf } from '@storybook/react';

import { Author } from 'components/molecules/Author/Author';

const stories = storiesOf('Molecules/Author', module);

stories.add('default', () => (
  <Author avatar="https://avatars2.githubusercontent.com/u/11388211" name="Quentin Machard" username="qmachard" />
));

stories.add('+ long name', () => (
  <Author
    avatar="https://avatars2.githubusercontent.com/u/11388211"
    name="Jean-Michel LongLongName"
    username="jeanmichel_longname"
  />
));
