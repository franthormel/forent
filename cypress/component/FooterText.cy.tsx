import FooterText from "@/components/footer/text"

describe('Footer Text', () => {
    it('works', () => {
        cy.mount(<FooterText value='Footer Text' dataCy="footer-text" />)
        cy.get('[data-cy="footer-text"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', 'Footer Text')
    })
})
