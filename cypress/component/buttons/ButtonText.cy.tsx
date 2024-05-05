import ButtonText from '@/components/buttons/text';

describe('Button Text', () => {
    beforeEach(() => {
        cy.mount(<ButtonText
            dataCy='btn-text'
            text='Click Me!'
            onClick={cy.spy()} />)
    })

    it('should be displayed', () => {
        cy.get('[data-cy="btn-text"]')
            .should('exist')
            .and('be.visible')
    })

    it('should display correct text', () => {
        cy.get('[data-cy="btn-text"]')
            .should('have.text', 'Click Me!')
    })

    it('should call given function when clicked', () => {
        cy.get('[data-cy="btn-text"]')
            .click()
    })
})
