import React from 'react';
import * as PropTypes from 'prop-types';

import Reactions from '../../molecules/Reactions';
import Post from '../../organisms/Post';

import './PostPage.scss';

const PostPage = ({ post, reactions }) => {
  return (
    <main className="post-page">
      <Post cover={post.cover} html={post.html} title={post.title} tags={post.tags} />

      <aside className="post-page_aside">
        <Reactions issue={post.id} reactions={reactions} />
      </aside>
    </main>
  );
};

PostPage.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  reactions: PropTypes.objectOf(PropTypes.number),
};

PostPage.defaultProps = {
  reactions: [],
};

export default PostPage;
