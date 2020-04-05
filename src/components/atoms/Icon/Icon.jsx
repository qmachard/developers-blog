import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import icons from '../../../../static/icons.svg';

import './Icon.scss';

/**
 * Icon Component
 */
const Icon = ({ icon, title, className }) => {
  const componentClassName = classNames('icon', `icon-${icon}`, className);

  return (
    <i className={componentClassName} title={title}>
      <svg className="icon_svg">
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </i>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
