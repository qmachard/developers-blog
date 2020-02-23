import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/global/Layout';
import { PostPage as PostPageComponent, PostPagePost } from 'components/pages/PostPage';

import { parsePost } from 'utils/posts';

type PostPageProps = {
  data: any;
};

const PostPage: React.FC<PostPageProps> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data

  const post = parsePost(markdownRemark);

  return (
    <Layout title={post.title} description={post.title}>
      <PostPageComponent post={post as PostPagePost} />
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
        excerpt
        tags
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
