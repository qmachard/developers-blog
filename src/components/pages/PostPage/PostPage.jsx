import React from 'react';
import * as PropTypes from 'prop-types';

import Author from 'components/molecules/Author';
import Tag from 'components/atoms/Tag';
import Icon from 'components/atoms/Icon';
import Reactions from 'components/molecules/Reactions';
import Footer from 'components/organisms/Footer';

import './PostPage.scss';

const PostPage = ({ post, author, reactions }) => {
  return (
    <main className="post-page">
      <header className="post-page_cover" style={{ backgroundImage: `url('${post.cover}')` }}>
        <div className="post-page_cover_inner container">
          <h1 className="post-page_title title-1">{post.title}</h1>
          {post.excerpt && <p className="post-page_excerpt">{post.excerpt}</p>}
          {post.tags && (
            <ul className="post-page_tags">
              {post.tags.map(tag => (
                <li key={`tag-${tag}`} className="post-page_tag">
                  <Tag icon={<Icon icon="hashtag" title="tag: " />}>{tag}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="post-page_inner container">
        <article className="post-page_html post" dangerouslySetInnerHTML={{ __html: post.html }} />

        <aside className="post-page_aside">
          <Reactions issue={post.id} reactions={reactions} />

          {author && (
            <Author avatar={author.avatar} github={author.github} name={author.name} username={author.username} />
          )}
        </aside>

        <Footer />
      </div>
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
  author: PropTypes.shape(Author.propTypes),
};

PostPage.defaultProps = {
  reactions: [],
  author: null,
};

export default PostPage;
