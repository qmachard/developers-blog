import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/global/Layout';
import { IndexPage as IndexPageComponent } from 'components/pages/IndexPage';
import { ProfileProps } from 'components/molecules/Profile';

type IndexPageProps = {
  data: any;
};

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    site: {
      siteMetadata: { theme },
    },
    allPost: { nodes: posts },
    allProject: { nodes: projects },
  },
}) => {
  const profile: ProfileProps = {
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
        posts={posts.map((post: any) => ({
          id: post.id,
          description: post.excerpt,
          title: post.title,
          image: post.cover,
          link: post.path,
        }))}
        profile={profile}
        projects={projects.map((project: any) => ({
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

export default IndexPage;
