import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/global/Layout';
import { PostPage as PostPageComponent, PostPagePost } from 'components/pages/PostPage';

type PostPageProps = {
  data: any;
};

const PostPage: React.FC<PostPageProps> = ({ data: { post } }) => {
  return (
    <Layout title={post.title} description={post.title}>
      <PostPageComponent post={post as PostPagePost} author={post.author} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    post(path: { eq: $path }) {
      title
      html
      cover
      path
      excerpt
      author {
        username
        name
        avatar
        github
      }
    }
  }
`;

export default PostPage;
