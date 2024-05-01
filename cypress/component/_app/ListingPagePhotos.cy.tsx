import ListingPagePhotos from "@/app/listing/_component/photos";

describe('Listing Page Photos', () => {
    const imageUrls = [
        'https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa',
        'https://images.unsplash.com/photo-1598928739741-a922f245bb6d',
        'https://images.unsplash.com/photo-1598928387577-d49b6d399110',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1464890100898-a385f744067f',
        'https://images.unsplash.com/photo-1538609589535-bb35f0c034db'
    ];
    [640, 768, 1024, 1280, 1536].forEach((width) => {
        it(`should display correct UI  = ${width}`, () => {
            cy.viewport(width, 1000);
            cy.mount(<ListingPagePhotos dataCy="listing-photos" imageUrls={imageUrls} />)
            cy.get('[data-cy="listing-photos"]')
                .should('be.visible')
                .and('exist')
                .children() // TODO: Remove, component too
                .should("exist")
                .and('be.visible')
                .and('have.length', 2)
        });
    });
});
