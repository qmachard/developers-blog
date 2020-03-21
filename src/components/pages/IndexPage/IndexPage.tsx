import React from 'react';
import { Profile, ProfileProps } from 'components/molecules/Profile';
import { CardsList } from 'components/organisms/CardsList';
import { PostCard, PostCardProps } from 'components/molecules/PostCard';
import { ProjectCard, ProjectCardProps } from 'components/molecules/ProjectCard';
import { Footer } from 'components/organisms/Footer';

import './IndexPage.scss';

export type IndexPageProps = {
  profile: ProfileProps;
  posts: ({ id: string } & PostCardProps)[];
  projects: ({ id: string } & ProjectCardProps)[];
};

export const IndexPage: React.FC<IndexPageProps> = ({ profile, posts, projects }) => {
  return (
    <div className="index-page">
      <Profile {...profile} />

      <main className="index-page_inner">
        {posts.length > 0 && (
          <CardsList title="Posts.">
            {posts.map(post => (
              <PostCard key={`post-${post.id}`} {...post} />
            ))}
          </CardsList>
        )}

        {projects.length > 0 && (
          <CardsList title="Projects.">
            {projects.map(project => (
              <ProjectCard key={`project-${project.id}`} {...project} />
            ))}
          </CardsList>
        )}

        <Footer />
      </main>
    </div>
  );
};
