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
            { text: '前端Contribute指南', link: '/Developer/frontend/' },
            { text: '后端API参考', link: '/Developer/backend/' },
            { text: '用户文档', link: '/User/index.html' }
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