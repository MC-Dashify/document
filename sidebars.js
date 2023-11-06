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
            'usage/launcher/advanced',
          ],
        },
        {
          type: 'category',
          label: '클라이언트',
          items: [
            'usage/client/getting-started',
            'usage/client/server-profiles',
            {
              type: 'category',
              label: '서버 대시보드',
              link: {
                type: 'doc',
                id: 'usage/client/dashboard/index',
              },
              items: [
                'usage/client/dashboard/overview',
                'usage/client/dashboard/stats',
                'usage/client/dashboard/worlds',
                'usage/client/dashboard/players',
                'usage/client/dashboard/traffic',
                'usage/client/dashboard/console',
              ]
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '개발',
      link: {
        type: 'doc',
        id: 'dev/index',
      },
      items: [
        {
          type: 'category',
          label: 'API',
          items: [
            'dev/api/launcher',
            'dev/api/plugin',
          ],
        },
      ]
    }
  ],
};

module.exports = sidebars;
