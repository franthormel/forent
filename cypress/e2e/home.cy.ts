describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("must display logo header", () => {
    cy.get('[data-cy="logo-header"]').should("have.text", "Forent");
  });
});
