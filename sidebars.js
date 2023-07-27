/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '사용법',
      link: {
        type: 'doc',
        id: 'usage/index',
      },
      items: [
        {
          type: 'category',
          label: '런쳐',
          items: [
            'usage/launcher/getting-started',
            'usage/launcher/server-configuration',
          ],
        },
        {
          type: 'category',
          label: '클라이언트',
          items: ['usage/client/getting-started'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
