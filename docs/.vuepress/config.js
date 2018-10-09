// .vuepress/config.js
module.exports = {
  title: '<example-vanilla>',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Demos', link: 'http://localhost/demos/' },
      { text: 'External', link: 'https://google.com' },
    ]
  },
  dest: '_site'
}
