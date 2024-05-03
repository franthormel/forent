import ListingCreateHeader from "@/app/listing/create/_components/header"

describe('Listing Create Header', () => {
    it("should display correct UI", () => {
        cy.mount(<ListingCreateHeader />)
        cy.get('[data-cy="listing-create-header"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'Create your listing')
        cy.get('[data-cy="listing-create-subheader"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'By providing the following information')
    });
});
