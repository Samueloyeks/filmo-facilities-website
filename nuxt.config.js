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
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous'
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-138727237-1",
        async: true,
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
        body: true,
      },
      {
        src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
        body: true,
        defer: true,
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
        body: true,
      }
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
    '~/assets/css/style.css',
    '~/assets/css/animate.min.css',
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
    extend(config, ctx) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    }
  }
}
