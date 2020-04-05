import React from 'react';
import * as PropTypes from 'prop-types';

import Profile from '../../molecules/Profile';
import CardsList from '../../organisms/CardsList';
import PostCard from '../../molecules/PostCard';
import ProjectCard from '../../molecules/ProjectCard';
import Footer from '../../organisms/Footer';

import './IndexPage.scss';

const IndexPage = ({ profile, posts, projects }) => {
  return (
    <div className="index-page">
      <Profile {...profile} />

      <main className="index-page_inner">
        {posts.length > 0 && (
          <CardsList title="Posts.">
            {posts.map(post => (
              <PostCard key={`post-${post.id}`} {...post} />
            ))}
          </CardsList>
        )}

        {projects.length > 0 && (
          <CardsList title="Projects.">
            {projects.map(project => (
              <ProjectCard key={`project-${project.id}`} {...project} />
            ))}
          </CardsList>
        )}

        <Footer />
      </main>
    </div>
  );
};

IndexPage.propTypes = {
  profile: PropTypes.shape(Profile.propTypes).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, ...PostCard.propTypes })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, ...ProjectCard.propTypes })).isRequired,
};

IndexPage.defaultProps = {};

export default IndexPage;
