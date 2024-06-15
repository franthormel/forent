import ListingMainInfoColumn from "@/components/_app/listing/main-info-col";

describe('Listing Main Info Column', () => {
    it("should display correct UI", () => {
        cy.mount(<ListingMainInfoColumn value="v0.0.1" label="Version"
            dataCyValue="listing-main-info-col-value-version"
            dataCyLabel="listing-main-info-col-label-version" />)
        cy.get('[data-cy="listing-main-info-col-value-version"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'v0.0.1')
        cy.get('[data-cy="listing-main-info-col-label-version"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'Version')
    });
});
