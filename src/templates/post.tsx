import * as React from 'react';

import { graphql } from 'gatsby';

import { Layout } from 'components/global/Layout';
import { parsePost } from 'utils/posts';
import { Author } from 'components/molecules/Author';

type PostPageProps = {
  data: any;
};

const PostPage: React.FC<PostPageProps> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data

  const post = parsePost(markdownRemark);

  return (
    <Layout title={post.title} description={post.title}>
      <img src={post.cover} alt={post.title} />

      <Author image="https://avatars2.githubusercontent.com/u/11388211" name="Quentin Machard" username="qmachard" />

      <h1>{post.title}</h1>
      <h2>{post.path}</h2>

      <div className="article" dangerouslySetInnerHTML={{ __html: post.html! }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PostPage;