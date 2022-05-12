// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Champ\'s blog',
  tagline: 'The blog of tawanchai 👨🏼‍💻',
  url: 'https://blog.tawanchai.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tawanchaiii', // Usually your GitHub org/user name.
  projectName: 'blog.tawanchai.com', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          blogDescription: 'The blog of tawanchai',
          readingTime: ({content, defaultReadingTime}) =>
          defaultReadingTime({content, options: {wordsPerMinute: 60}}),
          blogSidebarCount: 0,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({

      metadata: [{name: 'keywords', content: 'blog,computer,ku'},
                 {name: 'description', content: 'code is sexy.'}],
      image: 'img/champmoji.png',
      navbar: {
        title: 'Champ\'s blog!',
        logo: {
          alt: 'My Site Logo',
          src: 'img/champmoji.png',
        },
        items: [
          {
            href: 'https://github.com/tawanchaiii',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://resume.tawanchai.com',
            label: 'Résumé',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      colorMode: {
        defaultMode: 'dark',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About me',
                to: '/',
              },
            ],
          },
          {
            title: 'Connections',
            items: [
              { html: `
              <a href="https://webring.wonderful.software#blog.tawanchai.com" title="webring">
                <img
                  alt="webring"
                  width="32"
                  height="32"
                  src="https://webring.wonderful.software/webring.white.svg"
                />
              </a>
              `},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Champ Tawanchai`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'APP_ID',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'SEARCH_API_KEY',
  
      //   indexName: 'INDEX_NAME',
  
      // },
    }),
};

module.exports = config;
