const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    defaultCommandTimeout: 30000,
    baseUrl: 'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    experimentalStudio: true,
    projectId: 'vviifa'
  },
  env: {
    viewportWidthBreakpoint: 768
  }
})
