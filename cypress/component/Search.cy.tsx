import Search from "@/components/search"

describe('Search', () => {
    beforeEach(() => {
        cy.mount(<Search />)
        cy.get('[data-cy="search-input"]')
            .type('Address')
    })

    it('generally works', () => {
        cy.get('[data-cy="search-input"]')
            .should('exist')
            .and('be.visible')
            .and('not.have.text')
        cy.get('[data-cy="search-button-icon"]')
            .should('exist')
            .and('be.visible')
    })
})
