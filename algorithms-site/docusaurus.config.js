// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'סיכומי אלגוריתמים וסיבוכיות',
  tagline: 'כרגע עדיין בהרצה ',
  url: 'https://dvirdiei.github.io', // הכתובת העתידית בגיטהאב
  baseUrl: '/algorithms-summary/', // שם ה-Repository שתפתח
  projectName: 'algorithms-summary',
  organizationName: 'dvirdiei',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
  defaultLocale: 'he',
  locales: ['he'],
  localeConfigs: {
    he: {
      label: 'עברית',
      direction: 'rtl', 
    },
  },
},

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQWSi9PQPg5zuEgiML2TIG36EGKZiLZpEnLAQhTZ',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          editUrl: 'https://github.com/dvirdiei/algorithms-summary/tree/main/algorithms-site/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/dvirdiei/algorithms-summary/tree/main/algorithms-site/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'סיכומי אלגוריתמים',
        logo: {
          alt: 'סיכומי אלגוריתמים',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            docId: 'greedy-algorithms',
            position: 'left',
            label: 'הסילבוס',
          },
          {to: '/blog', label: 'בלוג', position: 'left'},
          {
            href: 'https://github.com/dvirdiei/algorithms-summary',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'החומר',
            items: [
              {
                label: 'אלגוריתמים חמדניים',
                to: '/docs/greedy-algorithms',
              },
              {
                label: 'תכנות דינמי',
                to: '/docs/dynamic-programming',
              },
            ],
          },
          {
            title: 'קהילה ולמידה',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'עוד',
            items: [
              {
                label: 'בלוג',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dvirdiei/algorithms-summary',
              },
            ],
          },
        ],
        copyright: `נבנה באהבה © ${new Date().getFullYear()} דביר דיאי`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
