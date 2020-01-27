import * as React from 'react';
import classNames from 'classnames';

import './Card.scss';

type CardProps = {
  link?: boolean,
  padding?: boolean,
  className?: string,
};

/**
 * Card Component
 */
export const Card: React.FC<CardProps> = ({padding, link, className, children}) => {
  const componentClassNames = classNames('card', {
    'card--padding': padding,
    'card--link': link,
  }, className);

  return (
    <article className={componentClassNames}>
      {children}
    </article>
  );
};

Card.defaultProps = {
  padding: true,
  link: false,
};
