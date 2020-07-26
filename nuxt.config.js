export default {
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss"
  ],
  build: {
    transpile: ["GLTFLoader.js", "OrbitControls.js"]
  },
  modules: [
    [
      "nuxt-i18n",
      {
        locales: ["en", "jp"],
        defaultLocale: "en",
        vueI18nLoader: true
      }
    ]
  ],
  plugins: [
    "@/plugins/composition-api",
  ],
  server: {
    port: 1234
  }
}
