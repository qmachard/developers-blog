import * as React from 'react';
import * as PropTypes from 'prop-types';

import Section from '../../atoms/Section';

import './CardsList.scss';

/**
 * CardsList Component
 */
const CardsList = ({ title, children }) => (
  <Section title={title} className="cards-list">
    <ul className="row">
      {React.Children.map(children, (card) => (
        <li className="cards-list_item col-xs-12 col-sm-6">{card}</li>
      ))}
    </ul>
  </Section>
);

CardsList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardsList;
