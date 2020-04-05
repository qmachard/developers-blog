import React from 'react';
import PropTypes from 'prop-types';

import Tag from '../../atoms/Tag';
import Icon from '../../atoms/Icon';

import './Profile.scss';

/**
 * Profile Component
 */
const Profile = ({ image, name, username, background, profession, website, location }) => (
  <aside style={{ backgroundImage: background ? `url(${background})` : '' }} className="profile">
    <img className="profile_image" src={image} alt="" />

    <h1 className="profile_name">{name}</h1>
    <p className="profile_username">
      <a href={`http://github.com/${username}`}>@{username}</a>
    </p>
    <p className="profile_profession">{profession}</p>
    {(website || location) && (
      <ul className="profile_tags">
        {website && (
          <li className="profile_tag">
            <Tag icon={<Icon icon="website" title="Website" />}>
              <a href={website}>{website}</a>
            </Tag>
          </li>
        )}

        {location && (
          <li className="profile_tag">
            <Tag icon={<Icon icon="location" title="Location" />}>{location}</Tag>
          </li>
        )}
      </ul>
    )}
  </aside>
);

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  background: PropTypes.string,
  profession: PropTypes.string,
  website: PropTypes.string,
  location: PropTypes.string,
};

Profile.defaultProps = {
  background: null,
  profession: null,
  website: null,
  location: null,
};

export default Profile;
