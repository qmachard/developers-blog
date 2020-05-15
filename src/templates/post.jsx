import React from 'react';
import * as PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { useReactions } from '../hooks/useReactions';

import Layout from '../components/global/Layout';
import PostPageComponent from '../components/pages/PostPage';

const PostPage = ({
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
      <PostPageComponent post={post} author={post.author} reactions={reactions} />
    </Layout>
  );
};

PostPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        theme: PropTypes.string,
      }),
    }),
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      html: PropTypes.string,
      path: PropTypes.string,
      cover: PropTypes.string,
      author: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
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