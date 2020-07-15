import React from 'react';
import * as PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { useReactions } from '../hooks/useReactions';

import Layout from '../components/global/Layout';
import PostPageComponent from '../components/pages/PostPage';
import Seo from '../containers/Seo';
import Profile from '../containers/Profile';

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
    <Layout theme={theme} className="post-page">
      <Seo
        title={post.title}
        description={post.excerpt}
        image={post.cover}
        author={post.author.name}
        published_time={post.published_at}
      />
      <Profile />
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
      excerpt: PropTypes.string,
      published_at: PropTypes.string,
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
      published_at(formatString: "YYYY-MM-DD")
    }
  }
`;

export default PostPage;
