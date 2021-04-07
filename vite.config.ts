const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue').default

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [vue()],
})
