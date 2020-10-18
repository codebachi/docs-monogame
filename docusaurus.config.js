
const path = require('path')
//const versions = require('./versions.json'); // 추후지원
const math = require('remark-math')
const katex = require('rehype-katex')
const npm2yarn = require('./src/plugins/remark-npm2yarn')
const prismTheme = require('prism-react-renderer/themes/shadesOfPurple')
const prismDarkTheme = require('prism-react-renderer/themes/shadesOfPurple')
// dracula, duotoneDark, duotoneLight, github, nightOwl
// nightOwlLight, oceanicNext, palenight, shadesOfPurple, synthwave84, ultramin, vsDark

module.exports = {
  title: 'MonoGame',
  tagline: 'Build optimized websites quickly, focus on your content',
  organizationName: 'codebachi', // Usually your GitHub org/user name.
  projectName: 'docs-monogame', // Usually your repo name.
  baseUrl: '/docs-monogame/',
  url: 'https://codebachi.github.io/docs-monogame',  
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  customFields: {
    description:
      'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
  },
  //clientModules: [require.resolve('./dogfooding/clientModuleExample.ts')],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    
  ],
  stylesheets: [
    {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
        crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [math, npm2yarn],
          rehypePlugins: [katex],
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [math, npm2yarn],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a>! ⭐️',
    },
    prism: {
      theme: prismTheme,
      darkTheme: prismDarkTheme,
    },
    image: 'img/docusaurus-soc.png',
    // metadatas: [{name: 'twitter:card', content: 'summary'}],
    navbar: {
      hideOnScroll: true,
      title: 'MonoGame',
      logo: {
        alt: 'MonoGame Logo',
        src: 'img/monogamelogo.svg',
        srcDark: 'img/monogamelogo.svg',
      },
      items: [
        {
          to: 'docs/',
          position: 'left',
          activeBasePath: 'docs',
          label: 'Docs',          
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
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
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },  
};
