export default {
  head: {
    title: "Treelar",
    meta: [
      { charset: "utf-8"},
      { name: 'description', content: 'I want better seo lol.'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#3399ff' },
      { name: 'og-name', content: "Treelar" },
      { name: 'og:type', content: "website" },
      { name: 'og:url', content: "https://treelar.wtf" },
      { name: 'og:description', content: "Why not learn about some dude that makes bad (good) robots, epic games (Reverse Game), horribly inefficient code, can speak very broken japanese, and becomes a j-pop idol fan because some guy shows him a circle clicking game." },
      { name: 'og:image', content: "https://treelar.wtf/logo/logo2020.png" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome"
  ],
  build: {
    transpile: ["GLTFLoader.js", "OrbitControls.js"],
    extend(config, {isDev, isClient}) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
      if(isDev) {
        config.mode = "development"
      }
    }
  },
  fontawesome: {
    component: "fa",
    icons: {
      solid: [
        "faHeart",
        "faBrain",
        "faToriiGate",
        "faEgg",
        "faHome"
      ],
      brands: [
        "faVuejs",
        "faTwitter",
        "faDiscord",
        "faGithub"
      ]
    }
  },
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            iso: "en-US"
          },
          {
            code: "ja",
            iso: "ja-JP"
          }
        ],
        defaultLocale: "en",
        vueI18nLoader: true,
        seo: true
      }
    ]
  ],
  plugins: [
    "@/plugins/composition-api",
    "@/plugins/enableDevTools"
  ],
  server: {
    host: "0.0.0.0",
    port: 1234
  }
}
