const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,  // Desabilitar o arquivo de suporte
    baseUrl: "https://front.serverest.dev",  // URL base
    setupNodeEvents(on, config) {
      config.env.NO_PROXY = "true";
      return config;
    },
    env: {
      loginUrl: "/login", // Endpoint da página de login
      homeUrl: "/home",   // Endpoint da página inicial
    },
    defaultCommandTimeout: 8000, // Timeout 
    retries: {
      runMode: 2,    // Número de tentativas em execuções normais
      openMode: 0,   // Tentativas ao executar no modo interativo
    },
    video: false,        // Desabilitar gravação de vídeos por padrão
    screenshotOnRunFailure: true, // Captura de tela em falhas
  },
});
