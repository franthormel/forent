import ButtonOutlined from '@/components/buttons/outlined';

describe('Button Outlined', () => {
    it('should be displayed', () => {
        cy.mount(<ButtonOutlined dataCyBtn='button' text='Click Me!' />)
        cy.get('[data-cy="button"]')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'border-color', 'rgb(31, 41, 55)')
    })

    it('should display correct text', () => {
        cy.mount(<ButtonOutlined dataCyBtn='button' text='Click Me!' />)
        cy.get('[data-cy="button"]').should('have.text', 'Click Me!')
    })

    it('should call given function when clicked', () => {
        cy.mount(<ButtonOutlined dataCyBtn='button' text='Click Me!' onClick={cy.spy()} />)
        cy.get('[data-cy="button"]').click()
    })
})
