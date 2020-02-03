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
    html: '<p>Hello world!</p>',
  });
});

test('parse list of simple node', () => {
  expect(parsePosts(simpleNodes)).toStrictEqual([
    {
      id: '1245678',
      title: 'Lorem ipsum',
      path: '/lorem-ipsum',
      cover: '/path/to/image.jpg',
      html: '<p>Hello world!</p>',
    },
    {
      id: '1245678',
      title: 'Lorem ipsum',
      path: '/lorem-ipsum',
      cover: '/path/to/image.jpg',
      html: '<p>Hello world!</p>',
    },
  ]);
});
