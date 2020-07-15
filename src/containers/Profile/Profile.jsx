import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ProfileComponent from '../../components/molecules/Profile';

const Profile = () => {
  const { profile } = useStaticQuery(graphql`
    {
      profile {
        bio
        name
        location
        image
        website
        username
        background
        twitter
      }
    }
  `);

  return (
    <ProfileComponent
      username={profile.username}
      name={profile.name}
      bio={profile.bio}
      image={profile.image}
      background={profile.background}
      location={profile.location}
      website={profile.website}
      twitter={profile.twitter}
    />
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
