import React from 'react';
import * as PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/global/Layout';
import IndexPageComponent from '../components/pages/IndexPage';

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { theme },
    },
    allPost: { nodes: posts },
    allProject: { nodes: projects },
  },
}) => {
  const profile = {
    username: 'qmachard',
    name: 'Quentin Machard',
    image: 'https://avatars2.githubusercontent.com/u/11388211',
    background: 'https://images.unsplash.com/photo-1550647134-b512b01d62a2?h=1500',
    profession: 'Front-End Developer',
    location: 'Rennes, France',
  };

  return (
    <Layout className="index-page" title="Developers Blog" description="Lorem ipsum" theme={theme}>
      <IndexPageComponent
        posts={posts.map((post) => ({
          id: post.id,
          description: post.excerpt,
          title: post.title,
          image: post.cover,
          link: post.path,
        }))}
        profile={profile}
        projects={projects.map((project) => ({
          id: project.id,
          title: project.full_name,
          description: project.description,
          link: project.homepage || project.html_url,
          language: project.language,
          forks: project.forks_count,
          stars: project.stargazers_count,
        }))}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        theme
      }
    }
    allPost {
      nodes {
        id
        title
        path
        cover
        excerpt
      }
    }
    allProject(filter: { fork: { eq: false } }) {
      nodes {
        id
        full_name
        fork
        language
        stargazers_count
        forks_count
        description
        html_url
        homepage
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        theme: PropTypes.string,
      }),
    }),
    allPost: PropTypes.shape({
      nodes: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        path: PropTypes.string,
        cover: PropTypes.string,
        excerpt: PropTypes.string,
      }),
    }),
    allProject: PropTypes.shape({
      nodes: PropTypes.shape({
        id: PropTypes.string,
        full_name: PropTypes.string,
        fork: PropTypes.string,
        language: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        description: PropTypes.string,
        html_url: PropTypes.string,
        homepage: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default IndexPage;
