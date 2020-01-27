import * as React from 'react';
import classNames from 'classnames';

const icons = require('../../../../static/icons.svg') as string;

import './Icon.scss';

type IconProps = {
  icon: string,
  title: string,
  className?: string,
}

/**
 * Icon Component
 */
export const Icon: React.FC<IconProps> = ({icon, title, className}) => {
  const componentClassName = classNames('icon', `icon-${icon}`, className);

  return (
    <i className={componentClassName} title={title}>
      <svg className="icon_svg">
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </i>
  );
};
