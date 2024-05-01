import Footer from "@/components/footer"

describe('Footer', () => {
    it('works', () => {
        cy.mount(<Footer />)
        cy.get('[data-cy="footer-text-about"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'About')
        cy.get('[data-cy="footer-text-privacy"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Privacy')
        cy.get('[data-cy="footer-text-a11y"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Accessibility')
        cy.get('[data-cy="footer-text-sitemap"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Sitemap')
    })
})
