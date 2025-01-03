const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.NO_PROXY = "true"; // Desabilita o uso de proxy
      return config;
    },
  },
});
