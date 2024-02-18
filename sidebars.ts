import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  api: [
    'api/index',
    {
      type: 'link',
      label: 'Giteway API',
      href: '/giteway/reference/api'
    }
  ],

  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with Galactiks',
        description: 'Learn how to install and generate your first website with galactiks projects',
        slug: '/getting-started/',
      },
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/create-template'
      ]
    },
    {
      type: 'category',
      label: 'Contents',
      link: {
        type: 'generated-index',
        title: 'Content Types',
        description: 'Explore available content types',
        slug: '/contents/',
      },
      collapsed: true,
      items: [
        'contents/article',
        'contents/listing-page',
        'contents/creative-work',
        'contents/organization',
        'contents/page',
        'contents/person',
        'contents/place',
        'contents/webpage-element',
        'contents/website'
      ]
    },
    {
      type: 'category',
      label: 'Giteway',
      collapsed: true,
      items: [
        'giteway/index'
      ],
    }
  ],
};

export default sidebars;
