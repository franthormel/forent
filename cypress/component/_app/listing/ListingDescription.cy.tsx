import ListingDescription from "@/components/_app/listing/description";

describe('Listing Description', () => {
    it("should display correct UI", () => {
        const description = `Amoveo cunae calcar.
Adeo usque creator alienus dedecor articulus bestia venustas.
Arbitro natus caritas volva ocer ara universe.`
        cy.mount(<ListingDescription description={description}
            dataCyDescription="listing-description" />)
        cy.get('[data-cy="listing-description-section-icon"]')
            .should('be.visible')
            .and('exist')
        cy.get('[data-cy="listing-description-section-text"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'Description')
        cy.get('[data-cy="listing-description"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', description)
    });
});
