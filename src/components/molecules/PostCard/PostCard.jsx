import React from 'react';
import PropTypes from 'prop-types';
import { FileText } from "react-feather";

import { Link } from 'gatsby';

import Card from '../../atoms/Card';
import './PostCard.scss';

/**
 * PostCard Component
 */
const PostCard = ({ title, description, image, link }) => (
  <Card className="post-card" link={!!link} padding={false}>
    <div className="post-card_image" style={{ backgroundImage: image ? `url(${image})` : undefined }}>
      {!image ? <FileText className="icon" /> : null}
    </div>
    <div className="post-card_inner">
      <h1 className="post-card_title card_title">
        {link ? (
          <Link to={link} className="a-block">
            {title}
          </Link>
        ) : (
          title
        )}
      </h1>
      {description && <p className="post-card_description card_description">{description}</p>}
    </div>
  </Card>
);

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

PostCard.defaultProps = {
  description: null,
  image: null,
  link: null,
};

export default PostCard;
