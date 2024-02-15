import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

const config: Config = {
  title: 'Galactiks',
  tagline: 'Generate feature-rich websites with ease',
  favicon: 'img/favicon.ico',

  url: 'https://docs.galactiks.com',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'thegalactiks',
  projectName: 'docs.galactiks.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
    { src: 'https://a.galactiks.com/js/script.js', defer: true, 'data-domain': 'docs.galactiks.com' },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/thegalactiks/docs.galactiks.com/tree/main/',
        },
      } satisfies Preset.Options,
    ],

    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'giteway-openapi',
            spec: 'https://raw.githubusercontent.com/thegalactiks/giteway/main/docs/openapi.yaml',
            route: '/giteway/reference/api/',
          }
        ]
      } satisfies Redocusaurus.PresetOptions
    ]
  ],

  themeConfig: {
    image: 'logo-no-background.png',
    navbar: {
      title: 'Galactiks',
      logo: {
        alt: 'Galactiks',
        src: 'logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: '/api',
          sidebarId: 'api',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/thegalactiks',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/thegalactiks',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/thegalactiks',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Galactiks.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    } satisfies Preset.ThemeConfig,
  },
};

export default config;
