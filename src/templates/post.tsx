import * as React from 'react';
import { graphql } from 'gatsby';

import { useReactions } from 'hooks/useReactions';

import { Layout } from 'components/global/Layout';
import { PostPage as PostPageComponent, PostPagePost as PostPagePostType } from 'components/pages/PostPage';

export type PostPageProps = {
  data: {
    site: {
      siteMetadata: {
        theme: string;
      };
    };
    post: {
      id: string;
      title: string;
      html: string;
      path: string;
      cover?: string;
      author: {
        avatar: string;
        username: string;
        name: string;
        id: string;
      };
    };
  };
};

const PostPage: React.FC<PostPageProps> = ({
  data: {
    site: {
      siteMetadata: { theme },
    },
    post,
  },
}) => {
  const reactions = useReactions(post.id);

  return (
    <Layout title={post.title} description={post.title} theme={theme}>
      <PostPageComponent post={post as PostPagePostType} author={post.author} reactions={reactions} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        theme
      }
    }
    post(path: { eq: $path }) {
      id
      title
      html
      path
      excerpt
      cover
      tags
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
