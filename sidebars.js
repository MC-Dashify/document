/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "사용법",
      items: ["usage/install", "usage/server-configuration"],
    },
  ],
};

module.exports = sidebars;
