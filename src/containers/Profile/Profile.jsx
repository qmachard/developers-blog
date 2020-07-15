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
      }
    }
  `);

  return (
    <ProfileComponent
      username={profile.username}
      name={profile.name}
      image={profile.image}
      background={profile.background}
    />
  );
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
