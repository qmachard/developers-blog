import { parsePost, parsePosts } from './posts';

const simpleNode = {
  id: '1245678',
  frontmatter: {
    title: 'Lorem ipsum',
    path: '/lorem-ipsum',
    cover: {
      childImageSharp: {
        fluid: {
          src: '/path/to/image.jpg',
        },
      },
    },
    excerpt: 'Lorem ipsum excerpt',
    tags: ['javascript'],
  },
  html: '<p>Hello world!</p>',
};

const simpleNodes = {
  edges: [
    {
      node: simpleNode,
    },
    {
      node: simpleNode,
    },
  ],
};

test('parse simple node', () => {
  expect(parsePost(simpleNode)).toStrictEqual({
    id: '1245678',
    title: 'Lorem ipsum',
    path: '/lorem-ipsum',
    cover: '/path/to/image.jpg',
    excerpt: 'Lorem ipsum excerpt',
    html: '<p>Hello world!</p>',
    tags: ['javascript'],
  });
});

test('parse list of simple node', () => {
  expect(parsePosts(simpleNodes)).toStrictEqual([
    {
      id: '1245678',
      title: 'Lorem ipsum',
      path: '/lorem-ipsum',
      cover: '/path/to/image.jpg',
      excerpt: 'Lorem ipsum excerpt',
      html: '<p>Hello world!</p>',
      tags: ['javascript'],
    },
    {
      id: '1245678',
      title: 'Lorem ipsum',
      path: '/lorem-ipsum',
      cover: '/path/to/image.jpg',
      excerpt: 'Lorem ipsum excerpt',
      html: '<p>Hello world!</p>',
      tags: ['javascript'],
    },
  ]);
});
