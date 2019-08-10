import React from 'react';
import * as PropTypes from 'prop-types';

import Card from '../../atoms/Card';

import './PostCard.scss'

/**
 * PostCard Component
 */
class PostCard extends React.PureComponent {
  render() {
    const {title, description, image, link} = this.props;

    return (
      <Card className="post-card" link={!!link} padding={false}>
        { image && <img className="post-card_image" src={image} alt=""/>}

        <div className="post-card_inner">
          <h1 className="post-card_title card_title">
            {link ? <a href={link} className="a-block">{title}</a> : title}
          </h1>
          { description && <p className="post-card_description card_description">{description}</p>}
        </div>
      </Card>
    );
  }
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

PostCard.defaultProps = {};

export default PostCard;
