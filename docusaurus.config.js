// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dashify',
  tagline: 'Minecraft 서버 모니터링을 쉽고 빠르게',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dashify.cc/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MC-Dashify', // Usually your GitHub org/user name.
  projectName: 'document', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/MC-Dashify/document/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Dashify',
        logo: {
          alt: 'Dashify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            to: '/docs/usage',
            position: 'left',
            label: '사용법',
            items: [
              {
                label: '런쳐',
                to: '/docs/usage/launcher/getting-started',
              },
              {
                label: '클라이언트',
                to: '/docs/usage/client/getting-started',
              },
            ],
          },
          {
            type: 'dropdown',
            position: 'right',
            label: '다운로드',
            items: [
              {
                label: '런쳐',
                to: '/downloads/launcher',
              },
              {
                label: '클라이언트',
                to: '/downloads/client',
              },
            ],
          },
          {
            href: 'https://github.com/MC-Dashify/document',
            label: '깃허브',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '커뮤니티',
            items: [
              {
                label: '디스코드',
                href: 'https://discord.gg/K628pwyRNP',
              },
            ],
          },
          {
            title: '그 외',
            items: [
              {
                label: '깃허브',
                href: 'https://github.com/MC-Dashify/document',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dashify`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
