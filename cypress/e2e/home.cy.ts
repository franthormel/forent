describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("should display proper authentication options", () => {
    it("when user is not authenticated", () => {
      cy.get('[data-cy="header-link-sign-in"]')
        .should("exist")
        .and("be.visible");
    });

    it("when user is authenticated via Google OAuth", () => {
      cy.loginByGoogleApi();
    });

    it("sign-in then sign-out", () => {
      cy.login();
      cy.reload();

      cy.get('[data-cy="header-link-create-listing"]')
        .should("exist")
        .and("be.visible")
        .and("have.text", "Create Listing")
        .and("have.attr", "href")
        .and("include", "/listing/create");
      cy.get('[data-cy="header-sign-out"]')
        .should("exist")
        .and("be.visible")
        .click();
      cy.reload();

      cy.get('[data-cy="header-link-sign-in"]')
        .should("exist")
        .and("be.visible");
    });
  });

  [640, 768, 1024, 1280, 1536].forEach((width) => {
    describe(`display correct UI when viewport width is ${width}`, () => {
      before(() => {
        cy.viewport(width, 1000);
      });

      it("header", () => {
        cy.get('[data-cy="logo-header"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", "Forent");

        cy.get('[data-cy="header-link-sign-in"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", "Sign In")
          .and("have.attr", "href")
          .and("include", "/api/auth/signin");
      });

      it("footer", () => {
        cy.get('[data-cy="footer-text-about"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", "About");

        cy.get('[data-cy="footer-text-privacy"]')
          .should("have.text", "Privacy")
          .and("not.have.attr", "href");

        cy.get('[data-cy="footer-text-a11y"]')
          .should("have.text", "Accessibility")
          .and("not.have.attr", "href");

        cy.get('[data-cy="footer-text-sitemap"]')
          .should("have.text", "Sitemap")
          .and("not.have.attr", "href");
      });

      it("body", () => {
        cy.get('[data-cy="header-main"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", "Renting made simple");

        // Search bar
        cy.get('[data-cy="search-address-input')
          .should("exist")
          .and("be.visible")
          .type("Address");
        cy.get('[data-cy="search-address-btn-icon')
          .should("exist")
          .and("be.visible");

        cy.get('[data-cy="btn-view-listings"]')
          .should("exist")
          .and("be.visible")
          .and("have.text", "View more listings");
      });
    });
  });
});
