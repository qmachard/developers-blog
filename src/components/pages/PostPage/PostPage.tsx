import React from 'react';

import { Reactions as ReactionsModel } from 'models/Reaction';

import { Author, AuthorProps } from 'components/molecules/Author';
import { Tag } from 'components/atoms/Tag';
import { Icon } from 'components/atoms/Icon';
import { Reactions } from 'components/molecules/Reactions';
import { Footer } from 'components/organisms/Footer';

import './PostPage.scss';

export type PostPagePost = {
  id: string;
  title: string;
  path: string;
  cover: string;
  html: string;
  excerpt?: string;
  tags?: string[];
};

export type PostPageProps = {
  post: PostPagePost;
  reactions: ReactionsModel;
  author?: AuthorProps;
};

export const PostPage: React.FC<PostPageProps> = ({ post, author, reactions }) => {
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

          {author && <Author {...author} />}
        </aside>

        <Footer />
      </div>
    </main>
  );
};
