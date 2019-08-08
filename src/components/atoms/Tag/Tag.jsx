import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tag Component
 */
class Tag extends React.PureComponent {
  render() {
    return (
      <span></span>
    );
  }
}

Tag.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Tag.defaultProps = {};

export default Tag;
