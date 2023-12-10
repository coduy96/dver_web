// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dver',
  tagline: 'Crafting Excellence in Mobile Apps with Flutter Expertise!',
  favicon: 'img/favicon.ico',
  url: 'https://dver.app',
  baseUrl: '/',
  projectName: 'dver',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        highlightSearchTermsOnTargetPage: true,
        externalSearchSources: [
          {
            heading: "Dummy External Source 1",
            uri: "/docusaurus-plugin-search-local/fixtures/index-1/",
          },
          {
            heading: "Dummy External Source 2",
            uri: "/docusaurus-plugin-search-local/fixtures/index-2/",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Dver',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dver.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          { to: "showcase", label: "Showcase", position: "left" },

          {
            href: 'https://github.com/coduy96',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dver.app`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      },
     
    }),
};

export default config;
