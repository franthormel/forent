import ButtonOutlined from '@/components/buttons/outlined';

describe('Button Outlined', () => {
    beforeEach(() => {
        cy.mount(<ButtonOutlined dataCyBtn='button' text='Click Me!' onClick={cy.spy()} />)
    })

    it('should be displayed', () => {
        cy.get('[data-cy="button"]')
            .should('exist')
            .and('be.visible')
            .and('have.css', 'border-color', 'rgb(31, 41, 55)')
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .and('have.css', 'color', 'rgb(31, 41, 55)')
    })

    it('should display correct text', () => {
        cy.get('[data-cy="button"]').should('have.text', 'Click Me!')
    })

    it('should call given function when clicked', () => {
        cy.get('[data-cy="button"]').click()
    })
})
