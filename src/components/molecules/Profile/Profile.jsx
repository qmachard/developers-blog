import React from 'react';
import * as PropTypes from 'prop-types';

import Tag from '../../atoms/Tag';
import Icon from '../../atoms/Icon';

import './Profile.scss'

/**
 * ProjectCard Component
 */
class Profile extends React.PureComponent {
  render() {
    const {image, name, username, profession, website, location} = this.props;

    return (
      <section className="profile">
        <img className="profile_image" src={image} alt=""/>
        <h1 className="profile_name">{name}</h1>
        <p className="profile_username"><a href={`http://github.com/${username}`}>@{username}</a></p>
        <p className="profile_profession">{profession}</p>
        {(website || location) && (
          <ul className="profile_tags">
            {website && (
              <li className="profile_tag">
                <Tag icon={<Icon icon="website" title="Website" />}><a href={website}>{website}</a></Tag>
              </li>
            )}

            {location && (
              <li className="profile_tag">
                <Tag icon={<Icon icon="location" title="Location" />}>{location}</Tag>
              </li>
            )}
          </ul>
        )}
      </section>
    );
  }
}

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profession: PropTypes.string,
  website: PropTypes.string,
  location: PropTypes.string,
};

Profile.defaultProps = {};

export default Profile;
