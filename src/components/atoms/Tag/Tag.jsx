import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

/**
 * Tag Component
 */
class Tag extends React.PureComponent {
  render() {
    const {icon, children} = this.props;

    return (
      <span className="tag">
        {icon}
        {children}
      </span>
    );
  }
}

Tag.propTypes = {
  icon: PropTypes.element,
};

Tag.defaultProps = {};

export default Tag;
