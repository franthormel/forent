describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("display", () => {
    it("logo header", () => {
      cy.get('[data-cy="logo-header"]').should("have.text", "Forent");
    });
  });

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
