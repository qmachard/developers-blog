import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Card.scss';

/**
 * Card Component
 */
class Card extends React.PureComponent {
  render() {
    const {padding, children} = this.props;

    const componentClassNames = classNames('card', {
      'card--padding': padding,
    });

    return (
      <article className={componentClassNames}>
        {children}
      </article>
    );
  }
}

Card.propTypes = {
  padding: PropTypes.bool,
};

Card.defaultProps = {
  padding: true,
};

export default Card;
