const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 30000,
    baseUrl: 'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    experimentalStudio: true
  },
  env: {
    viewportWidthBreakpoint: 768
  }
})
