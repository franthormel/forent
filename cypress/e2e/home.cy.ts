describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("must display logo header", () => {
    cy.get('[data-cy="logo-header"]').should("have.text", "Forent");
  });

  it("login using Google OAuth must work", () => {
    cy.loginByGoogleApi();
  });
});
