import CardListing from '@/components/card-listing';

describe('CardList', () => {
    it('should display correct text when there is only one (1) bed or bath', () => {
        cy.mount(<CardListing addressLine1='Address Line A1'
            addressLine2='Address Line A2'
            area="25"
            baths="1"
            beds="1"
            imgUrl="/public/profile.jpg"
            price='Php 3,000' />)
        cy.get('[data-cy="card-listing-image"]').should('exist').and('be.visible')
        cy.get('[data-cy="card-listing-price"]').should('have.text', 'Php 3,000')
        cy.get('[data-cy="card-listing-beds"]').should('have.text', '1 bed')
        cy.get('[data-cy="card-listing-baths"]').should('have.text', '1 bath')
        cy.get('[data-cy="card-listing-area"]').should('have.text', '25 sqm')
        cy.get('[data-cy="card-listing-address-line1"]').should('have.text', 'Address Line A1')
        cy.get('[data-cy="card-listing-address-line2"]').should('have.text', 'Address Line A2')
    })

    it('should display correct text when there are multiple beds or baths', () => {
        cy.mount(<CardListing addressLine1='Address Line B1'
            addressLine2='Address Line B2'
            area="50"
            baths="2"
            beds="2"
            imgUrl="/public/profile.jpg"
            price='Php 25,000' />)
        cy.get('[data-cy="card-listing-image"]').should('exist').and('be.visible')
        cy.get('[data-cy="card-listing-price"]').should('have.text', 'Php 25,000')
        cy.get('[data-cy="card-listing-beds"]').should('have.text', '2 beds')
        cy.get('[data-cy="card-listing-baths"]').should('have.text', '2 baths')
        cy.get('[data-cy="card-listing-area"]').should('have.text', '50 sqm')
        cy.get('[data-cy="card-listing-address-line1"]').should('have.text', 'Address Line B1')
        cy.get('[data-cy="card-listing-address-line2"]').should('have.text', 'Address Line B2')
    })
})
