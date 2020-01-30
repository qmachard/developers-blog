import { Post } from "models/Post";

export const parsePosts = ({ edges }: any): Post[] => {
  return edges.map((edge: any) => parsePost(edge.node));
};

export const parsePost = (node: any): Post => ({
  id: node.id,
  title: node.frontmatter.title,
  path: node.frontmatter.path,
  cover: node.frontmatter.cover.childImageSharp.fluid.src,
  html: node.html,
});
