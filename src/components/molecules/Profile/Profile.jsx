import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkIcon, MapPin, Twitter, GitHub } from 'react-feather';
import classNames from 'classnames';

import Tag from '../../atoms/Tag';

import './Profile.scss';

/**
 * Profile Component
 */
const Profile = ({ image, name, username, background, bio, website, location, twitter }) => {
  const className = classNames('profile', {
    'profile--with-background': !!background,
  });

  return (
    <aside style={{ backgroundImage: background ? `url(${background})` : '' }} className={className}>
      <img className="profile_image" src={image} alt="" />

      <h1 className="profile_name">{name}</h1>
      <p className="profile_username">
        <a href={`http://github.com/${username}`}>@{username}</a>
      </p>

      {bio && <p className="profile_bio">{bio}</p>}

      <ul className="profile_tags">
        {website && (
          <li className="profile_tag">
            <Tag icon={<LinkIcon className="icon" />}>
              <a href={`http://${website}`}>{website}</a>
            </Tag>
          </li>
        )}

        <li className="profile_tag">
          <Tag icon={<GitHub className="icon" />}>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </Tag>
        </li>

        {twitter && (
          <li className="profile_tag">
            <Tag icon={<Twitter className="icon" />}>
              <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
            </Tag>
          </li>
        )}

        {location && (
          <li className="profile_tag">
            <Tag icon={<MapPin className="icon" />}>{location}</Tag>
          </li>
        )}
      </ul>
    </aside>
  );
};

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  background: PropTypes.string,
  bio: PropTypes.string,
  website: PropTypes.string,
  location: PropTypes.string,
  twitter: PropTypes.string,
};

Profile.defaultProps = {
  background: null,
  bio: null,
  website: null,
  location: null,
  twitter: null,
};

export default Profile;
