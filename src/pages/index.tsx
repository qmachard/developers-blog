import * as React from 'react';

import './index.scss';

import { usePosts } from "hooks/posts";

import { Layout } from 'components/global/Layout';
import { Profile } from 'components/molecules/Profile';
import { CardsList } from 'components/organisms/CardsList';
import { PostCard } from 'components/molecules/PostCard';
import { ProjectCard } from 'components/molecules/ProjectCard';

type IndexPageProps = {};

const IndexPage: React.FC<IndexPageProps> = () => {
  const posts = usePosts();

  return (
    <Layout className="index-page" title="Developers Blog" description="Lorem ipsum">
      <Profile
        username="qmachard"
        name="Quentin Machard"
        image="https://avatars2.githubusercontent.com/u/11388211"
        background="https://images.unsplash.com/photo-1550647134-b512b01d62a2?h=1500"
        profession="Front-End Developer"
        location="Rennes, France"
      />

      <main className="index-page_inner">
        <CardsList title="Posts.">
          {posts.map((post) => (
            <PostCard
              key={`post-${post.id}`}
              title={post.title}
              link={post.path}
            />
          ))}
        </CardsList>

        <CardsList title="Projects.">
          <ProjectCard title="Project" description="Lorem ipsum dolor" language="Javascript" />
          <ProjectCard title="Project" description="Lorem ipsum dolor" language="Javascript" />
          <ProjectCard title="Project" description="Lorem ipsum dolor" language="Javascript" />
        </CardsList>
      </main>
    </Layout>
  );
};

export default IndexPage;
