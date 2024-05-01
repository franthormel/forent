import ListingPageMap from "@/app/listing/_component/map";

describe('Listing Page Map', () => {
    it("should display correct UI", () => {
        cy.mount(<ListingPageMap lat={-42.8722343} lon={147.3146128}
            mapId="mapId-001"
            dataCyMap="listing-map-slippy" />)
        cy.get('[data-cy="listing-map-section-icon"]')
            .should('be.visible')
            .and('exist')
        cy.get('[data-cy="listing-map-section-text"]')
            .should('be.visible')
            .and('exist')
            .and('have.text', 'Map')
        cy.get('[data-cy="listing-map-slippy"]')
            .should('exist')
            .and('be.visible')
    });
});
