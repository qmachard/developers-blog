import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import icons from '../../../../static/icons.svg';
import './Icon.scss';

/**
 * Icon Component
 */
class Icon extends React.PureComponent {
  render() {
    const {icon, className} = this.props;

    const componentClassName = classNames('icon', `icon-${icon}`, className);

    return (
      <svg className={componentClassName}>
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {};

export default Icon;
