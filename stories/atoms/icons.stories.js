import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../../src/components/atoms/Icon';

import icons from '../../static/icons.svg';

const stories = storiesOf('Atoms|Icons', module);

stories.add('default', () => <Icon icon="code" />);


// --- List all icons from sprite

const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
  const parser = new DOMParser();
  const svg = parser.parseFromString(xmlhttp.responseText, "image/svg+xml");

  const iconsList = Array.prototype.slice.call(svg.getElementsByTagName('symbol'));

  stories.add('list', () => (
    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
      {iconsList.map(item => (
        <li style={{display: 'flex', alignItems: 'center', flexDirection: 'column', border: '1px solid #F0F0F0', marginLeft: '10px', marginTop: '10px'}}>
          <span style={{display: 'block', padding: '10px'}}><Icon icon={item.id}/></span>
          <span style={{display: 'block', textAlign: 'center', padding: '5px', backgroundColor: '#F0F0F0', width: '100%'}}>{item.id}</span>
        </li>))}
    </ul>
  ));
};

xmlhttp.open("GET",icons,false);
xmlhttp.send();
