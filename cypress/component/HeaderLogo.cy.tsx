import HeaderLogo from '@/components/header-logo/HeaderLogo'

describe('HeaderLogo', () => {
  it('works', () => {
    cy.mount(<HeaderLogo />)
    cy.get('[data-cy="logo-header"]').should('have.text', 'Forent')
  })
})