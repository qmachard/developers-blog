import React from 'react';
import * as PropTypes from 'prop-types';

import './Tag.scss';

/**
 * Tag Component
 */
const Tag = ({icon, children}) => (
  <span className="tag">
    {icon}
    {children}
  </span>
);

Tag.propTypes = {
  icon: PropTypes.element,
};

Tag.defaultProps = {};

export default Tag;
