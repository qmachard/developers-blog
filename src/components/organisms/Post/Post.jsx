import React from 'react';
import * as PropTypes from 'prop-types';
import { ArrowLeft, Hash } from 'react-feather';
import { Link } from 'gatsby';

import './Post.scss';

import Tag from '../../atoms/Tag';
import Card from '../../atoms/Card';

const Post = ({ title, cover, html, excerpt, tags }) => {
  return (
    <Card padding={false} className="post">
      <Link to="/" className="post_back">
        <ArrowLeft />
      </Link>

      <header className="post_cover" style={{ backgroundImage: `url('${cover}')` }}>
        <div className="post_cover_inner container">
          <h1 className="post_title title-1">{title}</h1>
          {excerpt && <p className="post_excerpt">{excerpt}</p>}
          {tags && (
            <ul className="post_tags">
              {tags.map((tag) => (
                <li key={`tag-${tag}`} className="post_tag">
                  <Tag className="icon" icon={<Hash className="icon" aria-label="tag: " />}>
                    {tag}
                  </Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="post_inner container wysiwyg" dangerouslySetInnerHTML={{ __html: html }} />
    </Card>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Post.defaultProps = {
  excerpt: '',
  tags: [],
};

export default Post;
