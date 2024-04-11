import ButtonLinkFilled from '@/components/button-links/filled';

describe('Button Link Filled', () => {
    it('should be displayed', () => {
        cy.mount(<ButtonLinkFilled dataCy='button-link-filled' text='Go to Homepage' href='/homepage' />)
        cy.get('[data-cy="button-link-filled"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Go to Homepage')
            .and('have.attr', 'href')
            .and('include', '/homepage')
    })
})
