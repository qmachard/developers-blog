import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

/**
 * Card Component
 */
class Card extends React.PureComponent {
  render() {
    const {title, image, excerpt} = this.props;

    return (
      <article className="card">
        {image && <img src={image.src} alt={image.alt} className="card_image" />}
        <h1 className="card_title">{title}</h1>
        {excerpt && <p>{excerpt}</p>}
      </article>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  excerpt: PropTypes.string,
};

Card.defaultProps = {};

export default Card;
