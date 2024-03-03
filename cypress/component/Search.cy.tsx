import Search from "@/components/search"

describe('Search', () => {
    beforeEach(() => {
        cy.mount(<Search />)
        cy.get('[data-cy="searchInput"]')
            .type('Address')
    })

    it('generally works', () => {
        cy.get('[data-cy="searchInput"]')
            .should('exist')
            .and('be.visible')
            .and('not.have.text')
        cy.get('[data-cy="searchButtonIcon"]')
            .should('exist')
            .and('be.visible')
    })
})
