/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  extract: {
    include: [
      'components/**/*.{vue,jsx,tsx,svelte}',
      'layouts/**/*.{vue,jsx,tsx,svelte}',
      'pages/**/*.{vue,jsx,tsx,svelte}'
    ],
  },
  theme: {
    extend: {
      colors: {
        muse: "#e4007f",
        aqours: "#009fe8",
        niji: "#fab920",
        treelar: "#3399ff"
      }
    }
  },
  variants: {},
  plugins: [
    require('@windicss/plugin-question-mark')
  ]
}
