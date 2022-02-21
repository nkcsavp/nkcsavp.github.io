module.exports = {
    lang: 'zh-CN',
    title: 'Algorithm Visualization Platform Docs',
    head: [
      ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
      ['meta', { name: 'theme-color', content: '#fff' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196.png' }],
      ['link', { rel: 'apple-touch-icon', href: '/apple-icon-180.png' }]
    ],
    themeConfig: {
      logo: '/logo.jpg',
      repo: "https://github.com/nkcsavp/nkcsavp.github.io",
      nav:[
        {
          text: 'Nav',
          items: [
            { text: 'Developer-Frontend', link: '/Developer/frontend/' },
            { text: 'Developer-Backend', link: '/Developer/backend/' },
            { text: 'User', link: '/User/index.html' }
          ]
        }
      ]
    },
    plugins: [
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        'autobar', 
        [
          '@vuepress/plugin-search',
          {
            isSearchable: (page) => page.path !== '/',
          },
        ],

      ],
  }