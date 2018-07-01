module.exports = {
  // 配置根目录
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SLo',
      description: 'SLo个人博客'
    }
  },
  // 输出目录
  dest: 'blog',
  // 访问路径
  base: '/blog/',
  // head标签
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 主题配置
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        lastUpdated: '上次更新',
        // 导航栏顶级目录配置
        nav: [
          {
            text: 'Python',
            link: '/python/',
          },
        ],
        sidebar: {
          '/Python/': genSidebarConfig('Python')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
