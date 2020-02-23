import React from 'react';

import './Author.scss';

export type AuthorProps = {
  name: string;
  username?: string;
  image?: string;
};

export const Author: React.FC<AuthorProps> = ({ image, name, username }) => {
  return (
    <div className="author">
      {image && <img className="author_profile" src={image} alt={name} />}

      <div className="author_inner">
        <span className="author_name">{name}</span>
        <span className="author_username">@{username}</span>
      </div>
    </div>
  );
};
