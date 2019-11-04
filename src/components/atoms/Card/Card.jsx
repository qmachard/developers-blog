import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.scss';

/**
 * Card Component
 */
class Card extends React.PureComponent {
  render() {
    const {padding, link, className, children} = this.props;

    const componentClassNames = classNames('card', {
      'card--padding': padding,
      'card--link': link,
    }, className);

    return (
      <article className={componentClassNames}>
        {children}
      </article>
    );
  }
}

Card.propTypes = {
  padding: PropTypes.bool,
  link: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  padding: true,
  link: false,
};

export default Card;
