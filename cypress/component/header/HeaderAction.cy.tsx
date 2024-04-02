import HeaderAction from "@/components/header/action"

describe("Header Action", () => {
    beforeEach(() => {
        cy.mount(<HeaderAction
            onClick={cy.spy()}
            value="Click Me"
            dataCy="header-action" />)
    })

    it('should be displayed properly', () => {
        cy.get('[data-cy="header-action"]')
            .should('exist')
            .and('be.visible')
    })
    it('should display correct text', () => {
        cy.get('[data-cy="header-action"]')
            .should('have.text', "Click Me")
    })
    it('should call given function when clicked', () => {
        cy.get('[data-cy="header-action"]').click()
    })
})
