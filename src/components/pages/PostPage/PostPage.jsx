import React from 'react';
import * as PropTypes from 'prop-types';

import Reactions from '../../molecules/Reactions';
import Footer from '../../organisms/Footer';
import Profile from '../../molecules/Profile';
import Post from '../../organisms/Post';

import './PostPage.scss';

const PostPage = ({ profile, post, reactions }) => {
  return (
    <div className="post-page">
      <Profile
        username={profile.username}
        name={profile.name}
        background={profile.background}
        image={profile.image}
        location={profile.location}
        profession={profile.profession}
        website={profile.website}
      />

      <main className="post-page_inner">
        <Post cover={post.cover} html={post.html} title={post.title} tags={post.tags} />

        <aside className="post-page_aside">
          <Reactions issue={post.id} reactions={reactions} />
        </aside>

        <Footer />
      </main>
    </div>
  );
};

PostPage.propTypes = {
  profile: PropTypes.shape(Profile.propTypes).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  reactions: PropTypes.objectOf(PropTypes.number),
};

PostPage.defaultProps = {
  reactions: [],
};

export default PostPage;
