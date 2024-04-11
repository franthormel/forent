import ButtonLinkOutlined from '@/components/button-links/outlined';

describe('Button Link Outlined', () => {
    it('should be displayed', () => {
        cy.mount(<ButtonLinkOutlined dataCy='button-link-outlined' text='About Us' href='/about/us/page' />)
        cy.get('[data-cy="button-link-outlined"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'About Us')
            .and('have.attr', 'href')
            .and('include', '/about/us/page')
    })
})
