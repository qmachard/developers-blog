import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/global/Layout';
import { IndexPage as IndexPageComponent } from 'components/pages/IndexPage';
import { ProfileProps } from 'components/molecules/Profile';

import { parsePosts } from 'utils/posts';

type IndexPageProps = {
  data: any;
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const posts = parsePosts(data.allMarkdownRemark);

  const profile: ProfileProps = {
    username: 'qmachard',
    name: 'Quentin Machard',
    image: 'https://avatars2.githubusercontent.com/u/11388211',
    background: 'https://images.unsplash.com/photo-1550647134-b512b01d62a2?h=1500',
    profession: 'Front-End Developer',
    location: 'Rennes, France',
  };

  return (
    <Layout title="Developers Blog" description="Lorem ipsum">
      <IndexPageComponent
        posts={posts.map(post => ({
          id: post.id,
          description: post.excerpt,
          title: post.title,
          image: post.cover,
          link: post.path,
        }))}
        profile={profile}
        projects={[]}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
