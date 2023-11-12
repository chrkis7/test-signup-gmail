const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Unable to use baseUrl, since Google generates random pattern subruls for security purpose.
    //baseUrl: "https://https://www.google.com/",
  },
});
