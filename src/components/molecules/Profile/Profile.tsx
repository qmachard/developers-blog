import * as React from 'react';

import { Tag } from 'components/atoms/Tag';
import { Icon } from 'components/atoms/Icon';

import './Profile.scss';

export type ProfileProps = {
  image: string;
  name: string;
  username: string;
  background?: string;
  profession?: string;
  website?: string;
  location?: string;
};

/**
 * Profile Component
 */
export const Profile: React.FC<ProfileProps> = ({
  image,
  name,
  username,
  background,
  profession,
  website,
  location,
}) => (
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
