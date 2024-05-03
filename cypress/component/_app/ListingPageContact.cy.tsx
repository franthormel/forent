import ListingPageContact from "@/app/listing/[id]/_component/contact";

describe('Listing Page Contact', () => {
    describe("should display correct UI when", () => {
        afterEach(() => {
            cy.get('[data-cy="listing-contact-section-icon"]')
                .should('be.visible')
                .and('exist')
            cy.get('[data-cy="listing-contact-section-text"]')
                .should('be.visible')
                .and('exist')
                .and('have.text', "Contact")
        })

        it("Only email is provided", () => {
            cy.mount(<ListingPageContact email="user@email.com" />)
            cy.get('[data-cy="listing-contact-value-name"]')
                .should('not.exist')
            cy.get('[data-cy="listing-contact-value-number"]')
                .should('not.exist')
            cy.get('[data-cy="listing-contact-value-email"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'user@email.com')
                .and('have.attr', 'href')
                .and('include', 'mailto:user@email.com')
        });

        it("Both name and email are provided", () => {
            cy.mount(<ListingPageContact email="jantonio@email.xyz" name="Jorge Antonio" />)
            cy.get('[data-cy="listing-contact-value-name"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', "Jorge Antonio")
            cy.get('[data-cy="listing-contact-value-number"]')
                .should('not.exist')
            cy.get('[data-cy="listing-contact-value-email"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'jantonio@email.xyz')
                .and('have.attr', 'href')
                .and('include', 'mailto:jantonio@email.xyz')
        });

        it("Contact information, name and email are provided", () => {
            cy.mount(<ListingPageContact email="al@martinez.tbd" name="Almeria Martinez" contactNumber="+82-105-223-591" />)
            cy.get('[data-cy="listing-contact-value-name"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', "Almeria Martinez")
            cy.get('[data-cy="listing-contact-value-number"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', "+82-105-223-591")
            cy.get('[data-cy="listing-contact-value-email"]')
                .should('exist')
                .and('be.visible')
                .and('have.text', 'al@martinez.tbd')
                .and('have.attr', 'href')
                .and('include', 'mailto:al@martinez.tbd')
        });
    });
});
