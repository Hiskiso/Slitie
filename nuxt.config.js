export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Slitie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:"google-site-verification", content: "E3bitYG-y3wfPNiRocgaYOjzxigvmxIJuwhrKOBDgo4" },
      { name: "google-site-verification", content: "ec62d4fbae8fe56d"},
      { property: 'og:title', content: 'Slitie' },
      { property: 'og:site_name', content: 'Slitie Delelop' },
      { property: 'description', content: 'Главная страница' },
      { property: 'og:url', content: 'slitie.web.app' },
      { name: 'Keywords', content: "Slitie develop, slitie web app, slitie, Slitie" },
      
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    fix: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
