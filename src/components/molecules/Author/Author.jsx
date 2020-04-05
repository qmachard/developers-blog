import React from 'react';
import PropTypes from 'prop-types';

import './Author.scss';

const Author = ({ avatar, name, username, github }) => (
  <div className="author">
    {avatar && <img className="author_profile" src={avatar} alt={name} />}

    <div className="author_inner">
      <span className="author_name">{name}</span>
      <a href={github} className="author_username">
        @{username}
      </a>
    </div>
  </div>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string,
  avatar: PropTypes.string,
  github: PropTypes.string,
};

Author.defaultProps = {
  username: null,
  avatar: null,
  github: null,
};

export default Author;
