import Header from '../../components/ui/text/Header'

describe('Header', () => {
  it('works', () => {
    cy.mount(<Header value='Header' />)
    cy.get('[data-cy="header"]').should('have.text', 'Header')
  })
})
