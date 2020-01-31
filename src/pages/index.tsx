import * as React from 'react';

import { Layout } from 'components/global/Layout';

import { Card } from 'components/atoms/Card';

const IndexPage = () => {
  const image = {
    src: 'https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450',
    alt: 'This is an image',
  };

  return (
    <Layout title="Developers Blog" description="Lorem ipsum">
      <Card>Lorem ipsum</Card>
    </Layout>
  );
};

IndexPage.propTypes = {};

IndexPage.defaultProps = {};

export default IndexPage;
