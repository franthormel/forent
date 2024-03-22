import ButtonIconSearch from '@/components/button-icons/search';

describe('Button Icon Search', () => {
    it('works', () => {
        cy.mount(<ButtonIconSearch dataCy='btn-icon-search' />)
        cy.get('[data-cy="btn-icon-search"]').should('be.visible').and('exist')
    })
})
