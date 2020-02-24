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

  // const post = parsePost(markdownRemark);

  const post = data.post;

  return (
    <Layout title={post.title} description={post.title}>
      <PostPageComponent post={post as PostPagePost} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    post(path: { eq: $path }) {
      title
      html
      author {
        avatar
        username
        name
        id
      }
    }
  }
`;

export default PostPage;
