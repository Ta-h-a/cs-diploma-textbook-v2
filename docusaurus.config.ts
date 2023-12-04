import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CS Diploma Textbook',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // // GitHub pages deployment config.
  // // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        pages: {
          path: 'src/pages',
          routeBasePath: '',
        },
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    // [
    //   '@docusaurus/preset-classic',
    //   {
    //     pages: {
    //       path: 'src/pages',
    //       routeBasePath: '',
    //     }
    //   }
    // ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CS Diploma Textbook',
      // logo: {
      //   alt: 'My Site Logo',
      //   // src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs'
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Ta-h-a',
          label: 'GitHub',
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
              label: 'Original',
              to: 'https://cs-diploma-notebook.vercel.app/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Ta-h-a/cs-diploma-textbook-v2',
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
              href: 'https://github.com/Ta-h-a',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Made with ❤️ by Taha Sindoli.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
