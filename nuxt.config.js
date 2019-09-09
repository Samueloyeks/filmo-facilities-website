require('dotenv').config()

module.exports = {
  mode: 'spa',

  /**
   * Page Meta Data
   */
  meta: {
    name: 'FilmoRealty'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'FilmoRealty',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Evolution of Real Estate Services' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        type: "text/css",
        href: '/css/plugins.css',
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: '/css/style.css',
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: '/css/responsive.css',
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: '/css/color-variations/custom.css',
      }
    ],
    script: [
      {
        src: "/js/jquery.js",
        body: true,
      },
      {
        src: "/js/plugins.js",
        body: true,
      },
      {
        src: "/js/plugins/components/particles.js",
        body: true,
      },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
        async: true,
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#bbb' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/custom.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/mixin'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  }
}
