import ListingPageDescription from "@/app/listing/_component/description";

describe('Listing Page Description', () => {
    it("should display correct UI", () => {
        const description = `Amoveo cunae calcar.
Adeo usque creator alienus dedecor articulus bestia venustas.
Arbitro natus caritas volva ocer ara universe.`
        cy.mount(<ListingPageDescription description={description}
            dataCy="listing-description"
            dataCyDescription="listing-description-value" />)
        cy.get('[data-cy="listing-description"]')
            .should('be.visible')
            .and('exist')
            .children() // TODO: Remove, component too
            .should("exist")
            .and('be.visible')
            .and('have.length', 2)
        cy.get('[data-cy="section-header-icon-description"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'Description')
        cy.get('[data-cy="listing-description-value"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', description)
    });
});
