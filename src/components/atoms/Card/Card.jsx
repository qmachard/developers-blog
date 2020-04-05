import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.scss';

/**
 * Card Component
 */
const Card = ({ padding, link, className, children }) => {
  const componentClassNames = classNames(
    'card',
    {
      'card--padding': padding,
      'card--link': link,
    },
    className,
  );

  return <article className={componentClassNames}>{children}</article>;
};

Card.propTypes = {
  link: PropTypes.bool,
  padding: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  padding: true,
  link: false,
  className: null,
};

export default Card;
