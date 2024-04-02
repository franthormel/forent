import HeaderLogo from '@/components/header/logo'

describe('Header Logo', () => {
  it('works', () => {
    cy.mount(<HeaderLogo />)
    cy.get('[data-cy="logo-header"]').should('have.text', 'Forent')
  })
})
