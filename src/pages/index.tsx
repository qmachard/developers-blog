import * as React from 'react';

import './index.scss';

import { Layout } from 'components/global/Layout';
import { Profile } from 'components/molecules/Profile';
import { CardsList } from 'components/organisms/CardsList';
import { PostCard } from 'components/molecules/PostCard';
import { ProjectCard } from 'components/molecules/ProjectCard';

const IndexPage = () => {
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
          <PostCard title="Premier post" image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?w=500" />
          <PostCard title="Premier post" image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?w=500" />
          <PostCard title="Premier post" image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?w=500" />
          <PostCard title="Premier post" image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?w=500" />
          <PostCard title="Premier post" image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?w=500" />
          <PostCard title="Premier post" image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?w=500" />
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
