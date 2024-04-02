import TextError from "@/components/text/error"

describe("Text Error", () => {
    it("should be displayed", () => {
        cy.mount(<TextError value="Error occurred" dataCy="text-error" />)
        cy.get('[data-cy="text-error"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', "Error occurred")
    })
    it("should be hidden", () => {
        cy.mount(<TextError dataCy="text-error" />)
        cy.get('[data-cy="text-error"]').should('not.exist')
    })
})
