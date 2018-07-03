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
    ['meta', { name: 'theme-color', content: '#007fff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 主题配置
  themeConfig: {
    // 配置搜索选项
    search: true,
    // 最大提示数
    searchMaxSuggestions: 10,
    // 
    locales: {
      '/': {
        label: '简体中文',
        lastUpdated: '上次更新',
        // 导航栏顶级目录配置
        nav: [
          // 配置带下拉菜单的导航
          {
            text: '分类',
            items: [
              { text: 'HTML', link: '/HTML/' },
              { text: 'CSS', link: '/CSS/' },
              { text: 'JS', link: '/JS/' },
              { text: 'TS', link: '/TS/' },
              { text: 'WEB', link: '/WEB/' },
              // { text: 'HTML', link: '/language/' },
              { text: 'Python', link: '/python/' },
              { text: 'webpack', link: '/webpack/' },
            ]
          },
          // 配置单个导航
          // {
          //   text: 'Python',
          //   link: '/python/',
          // },
          {
            text: 'about',
            link: '/resume/',
          }
        ],
        // 自动生成侧边栏
        sidebar: 'auto',
        // 显示更新时间的字样取布尔值控制是否显示
        lastUpdated: '最后更新'
      }
    }
  },
  // 是否禁用ie5的 polyfill
  evergreen: true,
  // webpack 配置
  configureWebpack: {
    resolve: {
      // 路径别名
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}


// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         '',
//         'getting-started',
//         'basic-config',
//         'assets',
//         'markdown',
//         'using-vue',
//         'custom-themes',
//         'i18n',
//         'deploy'
//       ]
//     }
//   ]
// }
