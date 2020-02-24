import React from 'react';

import './Author.scss';

export type AuthorProps = {
  name: string;
  username?: string;
  avatar?: string;
};

export const Author: React.FC<AuthorProps> = ({ avatar, name, username }) => {
  return (
    <div className="author">
      {avatar && <img className="author_profile" src={avatar} alt={name} />}

      <div className="author_inner">
        <span className="author_name">{name}</span>
        <span className="author_username">@{username}</span>
      </div>
    </div>
  );
};
