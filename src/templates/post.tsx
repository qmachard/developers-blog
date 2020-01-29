import * as React from 'react';

import { graphql } from 'gatsby';

import Layout from 'components/global/Layout';

type PostPageProps = {
  data: any;
};

const PostPage: React.FC<PostPageProps> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title="Developers Blog">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>

      <div className="article" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default PostPage;
