import * as React from 'react';

import './Tag.scss';

type TagProps = {
  icon?: React.ReactNode,
}

/**
 * Tag Component
 */
export const Tag: React.FC<TagProps> = ({icon, children}) => (
  <span className="tag">
    {icon}
    {children}
  </span>
);
