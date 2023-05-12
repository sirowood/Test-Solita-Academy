import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.NODE_ENV === 'e2e'
      ? 'http://localhost:3001'
      : 'http://localhost:3000',
  },
  video: false,
  screenshotOnRunFailure: false,
});
