import { graphql, useStaticQuery } from 'gatsby';

import { Post } from 'models/Post';
import { MarkdownRemarkResults } from 'models/MarkdownRemark';

export const usePosts: () => Post[] = () => {
  const {
    allMarkdownRemark: { edges },
  }: MarkdownRemarkResults = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);

  return edges.map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.frontmatter.title,
    path: edge.node.frontmatter.path,
  }));
};
