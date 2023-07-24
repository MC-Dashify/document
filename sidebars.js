/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Section 1',
      items: ['section1/intro'],
    },
  ],
};

module.exports = sidebars;
