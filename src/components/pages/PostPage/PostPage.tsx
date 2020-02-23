import React from 'react';

import { Author, AuthorProps } from 'components/molecules/Author';

import './PostPage.scss';

export type PostPageProps = {
  post: {
    title: string;
    path: string;
    cover: string;
    html: string;
    excerpt?: string;
  };
  author?: AuthorProps;
  tags?: [];
};

export const PostPage: React.FC<PostPageProps> = ({ post, author }) => {
  return (
    <main className="post-page">
      <header className="post-page_cover" style={{ backgroundImage: `url('${post.cover}')` }}>
        <div className="post-page_cover_inner container">
          <h1 className="post-page_title title-1">{post.title}</h1>
          {post.excerpt && <p className="post-page_excerpt">{post.excerpt}</p>}
        </div>
      </header>

      <div className="post-page_inner container">
        <article className="post-page_html post" dangerouslySetInnerHTML={{ __html: post.html }}></article>

        <aside className="post-page_aside">{author && <Author {...author} />}</aside>
      </div>
    </main>
  );
};
