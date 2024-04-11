describe("not found page", () => {
  it("should display correct UI", () => {
    // Disables NextJS' uncaught exception ...
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // ... and 404 error
    cy.visit("/visit/page/that/does/not/exist", { failOnStatusCode: false });

    cy.get('[data-cy="not-found"]').should("exist");
    cy.get('[data-cy="not-found"]')
      .children()
      .should("exist")
      .and("have.length", 3);

    cy.get('[data-cy="not-found-glyph"]')
      .should("exist")
      .and("be.visible")
      .and("have.text", "¯\\_(ツ)_/¯");

    cy.get('[data-cy="not-found-text"]')
      .should("exist")
      .and("be.visible")
      .and("have.text", "This page does not exist");

    cy.get('[data-cy="not-found-button"]')
      .should("exist")
      .and("be.visible")
      .and("have.text", "Go to Homepage")
      .and("have.attr", "href")
      .and("include", "/");
  });
});
