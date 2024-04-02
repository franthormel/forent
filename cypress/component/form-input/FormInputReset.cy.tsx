import FormInputReset from "@/components/form-input/reset"

describe("Form Input Reset", () => {
    beforeEach(() => {
        cy.mount(<FormInputReset dataCy="form-input-reset" />)
    })

    it('should be displayed properly', () => {
        cy.get('[data-cy="form-input-reset"]')
            .should('exist')
            .and('be.visible')
    })
    it('should display correct text', () => {
        cy.get('[data-cy="form-input-reset"]')
            .should('have.attr', 'value')
            .and('include', 'Reset')
    })
    it('should call given function when clicked', () => {
        cy.get('[data-cy="form-input-reset"]').click()
    })
})
