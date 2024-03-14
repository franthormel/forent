describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("display correct UI and labels", () => {
    it("header", () => {
      cy.get('[data-cy="logo-header"]').should("have.text", "Forent");

      cy.get('[data-cy="header-link-create-listing"]')
        .should("have.text", "Create Listing")
        .and("have.attr", "href")
        .and("include", "/listings/create");

      cy.get('[data-cy="header-link-sign-in"]')
        .should("have.text", "Sign In")
        .and("have.attr", "href")
        .and("include", "/api/auth/signin");
    });

    it("footer", () => {
      cy.get('[data-cy="header-about"]')
        .should("have.text", "About")
        .and("not.have.attr", "href");

      cy.get('[data-cy="header-privacy"]')
        .should("have.text", "Privacy")
        .and("not.have.attr", "href");

      cy.get('[data-cy="header-a11y"]')
        .should("have.text", "Accessibility")
        .and("not.have.attr", "href");

      cy.get('[data-cy="header-sitemap"]')
        .should("have.text", "Sitemap")
        .and("not.have.attr", "href");
    });

    it("body", () => {
      cy.get('[data-cy="header-main"]').should(
        "have.text",
        "Renting made simple"
      );

      cy.get('[data-cy="btn-view-listings"]').should(
        "have.text",
        "View more listings"
      );
    });
  });

  // TODO: Fix
  describe("authentication", () => {
    it("Google OAuth", () => {
      cy.loginByGoogleApi();
    });

    it("sign-in then sign-out", () => {
      // Sign-in
      cy.login();
      cy.reload();

      // Sign-out button is displayed after signing in.
      cy.get('[data-cy="signout-button"]').should("exist");

      // Sign-out
      cy.visit("/api/auth/signout");
      cy.get("#submitButton").click();
    });
  });
});
