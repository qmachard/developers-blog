export type MarkdownRemarkFrontmatter = {
  date?: string | Date;
  path: string;
  title: string;
};

export type MarkdownRemarkNode = {
  id: string;
  excerpt?: string;
  frontmatter: MarkdownRemarkFrontmatter;
};

export type MarkdownRemarkEdge = {
  node: MarkdownRemarkNode;
};

export type MarkdownRemarkResults = {
  allMarkdownRemark: {
    edges: MarkdownRemarkEdge[];
  };
};
