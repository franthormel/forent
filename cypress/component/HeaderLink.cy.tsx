import HeaderLink from '@/components/header/link'

describe('HeaderLink', () => {
    it('works (variant A)', () => {
        cy.mount(<HeaderLink value='Header' href='/' />)
        cy.get('[data-cy="header-link"]')
            .should('have.text', 'Header')
            .and('have.attr', 'href')
            .and('include', '/')
    })
    it('works (variant B)', () => {
        cy.mount(<HeaderLink value='Click Me' href='/page/1' />)
        cy.get('[data-cy="header-link"]')
            .should('have.text', 'Click Me')
            .and('have.attr', 'href')
            .and('include', '/page/1')
    })
})
