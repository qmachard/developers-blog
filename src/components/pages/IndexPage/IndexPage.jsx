import React from 'react';
import * as PropTypes from 'prop-types';

import CardsList from '../../organisms/CardsList';
import PostCard from '../../molecules/PostCard';
import About from '../../molecules/About';
import ProjectCard from '../../molecules/ProjectCard';

import './IndexPage.scss';

const IndexPage = ({ about, posts, projects }) => {
  return (
    <main className="index-page">
      {posts.length > 0 && (
        <CardsList title="Posts.">
          {posts.map((post) => (
            <PostCard
              key={`post-${post.id}`}
              title={post.title}
              image={post.image}
              description={post.description}
              link={post.link}
            />
          ))}
        </CardsList>
      )}

      {projects.length > 0 && (
        <CardsList title="Projects.">
          {projects.map((project) => (
            <ProjectCard
              key={`project-${project.id}`}
              description={project.description}
              title={project.title}
              language={project.language}
              link={project.link}
              forks={project.forks}
              stars={project.stars}
            />
          ))}
        </CardsList>
      )}

      {about && <About title="About." html={about} />}
    </main>
  );
};

IndexPage.propTypes = {
  about: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, ...PostCard.propTypes })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, ...ProjectCard.propTypes })).isRequired,
};

IndexPage.defaultProps = {
  about: null,
};

export default IndexPage;
