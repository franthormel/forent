import ListingPageMap from "@/app/listing/_component/map";

describe('Listing Page Map', () => {
    [640, 768, 1024, 1280, 1536].forEach((width) => {
        it(`should display correct UI  = ${width}`, () => {
            cy.viewport(width, 1000);
            cy.mount(<ListingPageMap lat={-42.8722343} lon={147.3146128}
                mapId="mapId-001"
                dataCy="listing-map"
                dataCyMap="listing-map-slippy" />)
            cy.get('[data-cy="listing-map"]')
                .should('be.visible')
                .and('exist')
                .children()
                .should("exist")
                .and('be.visible')
                .and('have.length', 2)
            cy.get('[data-cy="listing-map-slippy"]')
                .should('exist')
                .and('be.visible')
        });
    });
});
