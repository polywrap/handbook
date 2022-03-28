/** @type {import('@docusaurus/types').DocusaurusConfig} */

const customFields = {
  githubUrl: `https://github.com/polywrap/monorepo`,
  discordUrl: `https://discord.gg/Z5m88a5qWu`,
  twitterUrl: 'https://twitter.com/polywrap_io',
  forumUrl: 'https://forum.polywrap.io',
  daoUrl: 'https://snapshot.org/#/polywrap.eth',
  blogUrl: 'https://blog.polywrap.io/',
  gitcoinUrl: 'https://gitcoin.co/grants/1252/web3api',
};

module.exports = {
  title: 'Polywrap (Pre-alpha)',
  tagline: 'The Universal Web3 Integration Standard',
  url: 'https://handbook.polywrap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'polywrap',
  projectName: 'handbook',
  themeConfig: {
    sidebarCollapsible: false,
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Pre-alpha',
      logo: {
        alt: 'Polywrap Icon',
        src: 'img/polywrap-logo-light.png',
        srcDark: 'img/polywrap-logo.png',
        href: '/',
      },
      items: [
        {
          label: 'Website',
          href: 'https://polywrap.io',
        },
        {
          label: 'Social',
          position: 'left',
          items: [
            {
              label: 'Blog',
              href: customFields.blogUrl,
              className: 'blog-logo',
              'aria-label': 'Polywrap Blog',
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
              className: 'twitter-logo',
              'aria-label': 'twitter account',
            },
            {
              label: 'Donate',
              href: customFields.gitcoinUrl,
              className: 'gitcoin-logo',
              'aria-label': 'gitcoin grant',
            },
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Code',
              href: customFields.githubUrl,
              className: 'github-logo',
              'aria-label': 'GitHub repository',
            },
            // Add back in once the forum is used
            /*{
              label: 'Discuss',
              href: customFields.forumUrl,
              className: 'forum-logo',
              'aria-label': 'Forum'
            },*/
            {
              label: 'Chat',
              href: customFields.discordUrl,
              className: 'discord-logo',
              'aria-label': 'Discord server',
            },
            {
              label: 'Govern',
              href: customFields.daoUrl,
              className: 'dao-logo',
              'aria-label': 'dao repo',
            },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/polywrap/handbook/tree/main',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./style.css'),
        },
        pages: {
          path: 'src/pages',
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
