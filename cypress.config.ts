import { defineConfig } from "cypress";
import dotenv from "dotenv";
import { installPlugin } from "@chromatic-com/cypress";

// Only works for non-CI environments
dotenv.config({ path: "./env.local " });
dotenv.config();

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
    specPattern: ["./cypress/e2e/*.cy.{ts,tsx}"],
    setupNodeEvents(on, config) {
      installPlugin(on, config);
    },
  },
  env: {
    authSecret: process.env.NEXTAUTH_SECRET,
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
});
