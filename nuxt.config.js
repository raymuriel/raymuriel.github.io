export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "Raymuriel's Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "./favicon.ico" }],
  },
  /*
   ** Add Custom Env Variables
   */
  env: {},
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#46D60B" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/pwa"
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend() { }
  },
  pwa: {
    icon: {
      source: "static/icon.png",
      filename: "icon.png",
      sizes: [64, 120, 144, 152, 192, 384, 512],
      purpose: ['any', 'maskable']
    },
    manifest: {
      name: "Raymuriel's Website",
      short_name: "Raymuriel",
      lang: "en-US",
      start_url: "/",
      orientation: "portrait",
      theme_color: "#46D60B",
      background_color: "#FFFFFF",
      useWebmanifestExtension: true,
    },
  }
};
