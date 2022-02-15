// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OneNine AI Docs',
  tagline: 'Building data driven workforce faster',
  url: 'https://onenine-ai.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'onenine-ai', 
  projectName: 'onenine-ai.github.io',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Onenine-AI/onenine-ai.github.io/tree/dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:{
    hideableSidebar: true,
    autoCollapseSidebarCategories: true,
    announcementBar: {
      id: 'new_docs_announcement', // Any value that will identify this message.
      content:'New Release Announcement: We have released the latest Version of the application. Head over to our page.',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
      navbar: {
        title: 'OneNine AI Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/one-nine-ai-logo.svg',
          srcDark: 'img/inverted-one-nine-ai-logo.svg'
        },
        items: [
          {
            to: '/docs',
            docId: 'intro',
            position: 'left',
            sidebarID: 'intro',
            label: 'Documentation',
          },
          {
            to: 'docs/tutorials',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://onenine.cloud/ai-academy',
            label: 'Get Certified for free',
            position: 'left'
          },
          {
            href: 'https://onenine.atlassian.net/servicedesk/customer/user/login?destination=portals',
            label: 'Support',
            position: 'left'
          },
          {
            href: 'https://onenine.cloud/release-notes',
            label: 'Changelog',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs/',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorials/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support Request',
                href: 'https://onenine.atlassian.net/servicedesk/customer/user/login?destination=portals',
              },
              {
                label: 'Visit Our Site',
                href: 'https://ai.onenine.cloud',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'OneNine AI Site',
                href: 'https://onenine.cloud/platform',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/onenine-ai/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OneNine AI . All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
