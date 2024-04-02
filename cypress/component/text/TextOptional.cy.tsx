import TextOptional from "@/components/text/optional"

describe("Text Error", () => {
    it("should be displayed", () => {
        cy.mount(<TextOptional optional={true} dataCy="text-optional" />)
        cy.get('[data-cy="text-optional"]')
            .should('exist')
            .and('be.visible')
            .and('have.text', "Optional")
    })
    it("should be hidden", () => {
        cy.mount(<TextOptional optional={false} dataCy="text-optional" />)
        cy.get('[data-cy="text-optional"]').should('not.exist')
    })
})
