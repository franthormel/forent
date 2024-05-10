import ButtonOutlined from '@/components/buttons/outlined';

describe('Button Outlined', () => {
    beforeEach(() => {
        cy.mount(<ButtonOutlined dataCy='button' text='Click Me!' onClick={cy.spy()} />)
    })

    it('should be displayed', () => {
        cy.get('[data-cy="button"]')
            .should('exist')
            .and('be.visible')
    })

    it('should display correct text', () => {
        cy.get('[data-cy="button"]').should('have.text', 'Click Me!')
    })

    it('should call given function when clicked', () => {
        cy.get('[data-cy="button"]').click()
    })
})
