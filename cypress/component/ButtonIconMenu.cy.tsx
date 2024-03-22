import ButtonIconMenu from '@/components/button-icons/menu';

describe('Button Icon', () => {
    it('works', () => {
        cy.mount(<ButtonIconMenu dataCy='btn-icon-menu' />)
        cy.get('[data-cy="btn-icon-menu"]').should('be.visible').and('exist')
    })
})
