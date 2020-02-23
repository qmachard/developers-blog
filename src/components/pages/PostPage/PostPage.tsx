import React from 'react';

import { Author, AuthorProps } from 'components/molecules/Author';

import './PostPage.scss';
import { Tag } from 'components/atoms/Tag';
import { Icon } from 'components/atoms/Icon';

export type PostPagePost = {
  title: string;
  path: string;
  cover: string;
  html: string;
  excerpt?: string;
  tags?: string[];
};

export type PostPageProps = {
  post: PostPagePost;
  author?: AuthorProps;
};

export const PostPage: React.FC<PostPageProps> = ({ post, author }) => {
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

        <aside className="post-page_aside">{author && <Author {...author} />}</aside>
      </div>
    </main>
  );
};
