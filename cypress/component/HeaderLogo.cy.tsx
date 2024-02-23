import HeaderLogo from '../../components/ui/text/HeaderLogo'

describe('HeaderLogo', () => {
  it('works', () => {
    cy.mount(<HeaderLogo />)
    cy.get('[data-cy="logo-header"]').should('have.text', 'Forent')
  })
})