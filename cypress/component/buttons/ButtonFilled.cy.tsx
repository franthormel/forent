import ButtonFilled from '@/components/buttons/filled';

describe('Button Filled', () => {
    it('should be displayed', () => {
        cy.mount(<ButtonFilled dataCyBtn='button' text='Click Me!' />)
        cy.get('[data-cy="button"]')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'background-color', 'rgb(251, 191, 36)')
    })

    it('should display correct text', () => {
        cy.mount(<ButtonFilled dataCyBtn='button' text='Click Me!' />)
        cy.get('[data-cy="button"]').should('have.text', 'Click Me!')
    })

    it('should call given function when clicked', () => {
        cy.mount(<ButtonFilled dataCyBtn='button' text='Click Me!' onClick={cy.spy()} />)
        cy.get('[data-cy="button"]').click()
    })
})
