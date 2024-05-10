import ListingBannerPhotos from "@/app/listing/[id]/_component/banner-photos";

describe('Listing Page Photos', () => {
    const imageUrls = [
        'https://images.unsplash.com/photo-1609767175584-7abe16d3f1fa',
        'https://images.unsplash.com/photo-1598928739741-a922f245bb6d',
        'https://images.unsplash.com/photo-1598928387577-d49b6d399110',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1464890100898-a385f744067f',
        'https://images.unsplash.com/photo-1538609589535-bb35f0c034db'
    ];

    it('should display correct links', () => {
        cy.mount(<ListingBannerPhotos imageUrls={imageUrls} listingId="id" />)

        cy.get('[data-cy="listing-sm-md-photo-1-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', '/listing/id/photos#1')
        cy.get('[data-cy="listing-lg-photo-1-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', '/listing/id/photos#1')
        cy.get('[data-cy="listing-lg-photo-2-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', '/listing/id/photos#2')
        cy.get('[data-cy="listing-lg-photo-3-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', '/listing/id/photos#3')
        cy.get('[data-cy="listing-lg-photo-4-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', '/listing/id/photos#4')
        cy.get('[data-cy="listing-lg-photo-5-link"]')
            .should('exist')
            .and('have.attr', 'href')
            .and('include', '/listing/id/photos#5')
    });

    describe("should display correct UI", () => {
        describe("for small and medium screens", () => {
            [640, 768].forEach((width) => {
                it(`${width}px`, () => {
                    cy.viewport(width, 1000);
                    cy.mount(<ListingBannerPhotos imageUrls={imageUrls} listingId="listing-id" />)

                    cy.get('[data-cy="listing-sm-md-photo-1"]')
                        .should('be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-1"]')
                        .should('not.be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-2"]')
                        .should('not.be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-3"]')
                        .should('not.be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-4"]')
                        .should('not.be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-5"]')
                        .should('not.be.visible')
                        .and('exist')
                });
            });
        })
        describe("for larger screens", () => {
            [1024, 1280, 1536].forEach((width) => {
                it(`${width}px`, () => {
                    cy.viewport(width, 1000);
                    cy.mount(<ListingBannerPhotos imageUrls={imageUrls} listingId="listing-id" />)

                    cy.get('[data-cy="listing-sm-md-photo-1"]')
                        .should('not.be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-1"]')
                        .should('be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-2"]')
                        .should('be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-3"]')
                        .should('be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-4"]')
                        .should('be.visible')
                        .and('exist')
                    cy.get('[data-cy="listing-lg-photo-5"]')
                        .should('be.visible')
                        .and('exist')
                });
            });
        })
    })
});
