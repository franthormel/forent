import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: ["./cypress/component/*.cy.{ts,tsx}"],
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["./cypress/e2e/*.cy.{ts,tsx}"],
  },
});
