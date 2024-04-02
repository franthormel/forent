import HeaderSignOut from "@/components/header/sign-out"

describe("Header Sign Out", () => {
    beforeEach(() => {
        cy.mount(<HeaderSignOut />)
    })

    it('should be displayed properly', () => {
        cy.get('[data-cy="header-sign-out"]')
            .should('exist')
            .and('be.visible')
    })
    it('should display correct text', () => {
        cy.get('[data-cy="header-sign-out"]')
            .should('have.text', "Sign Out")
    })
    it('should call given function when clicked', () => {
        cy.get('[data-cy="header-sign-out"]').click()
    })
})
