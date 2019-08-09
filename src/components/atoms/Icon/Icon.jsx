import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CustomPropTypes from '../../../utils/CustomPropTypes';

import icons from '../../../../static/icons.svg';
import './Icon.scss';

/**
 * Icon Component
 */
class Icon extends React.PureComponent {
  render() {
    const {icon, title, className} = this.props;

    const componentClassName = classNames('icon', `icon-${icon}`, className);

    return (
      <i className={componentClassName} title={title}>
        <svg className="icon_svg">
          <use xlinkHref={`${icons}#${icon}`} />
        </svg>
      </i>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: CustomPropTypes.className,
};

Icon.defaultProps = {};

export default Icon;
