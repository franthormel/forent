import Button from '@/components/button';

describe('Button', () => {
    it('should be displayed', () => {
        cy.mount(<Button dataCyBtn='button' text='Click Me!' />)
        cy.get('[data-cy="button"]')
            .should('exist')
            .and('be.visible')
    })

    it('should display correct text', () => {
        cy.mount(<Button dataCyBtn='button' text='Click Me!' />)
        cy.get('[data-cy="button"]').should('have.text', 'Click Me!')
    })

    it('should call given function when clicked', () => {
        cy.mount(<Button dataCyBtn='button' text='Click Me!' onClick={cy.spy()} />)
        cy.get('[data-cy="button"]').click()
    })
})
