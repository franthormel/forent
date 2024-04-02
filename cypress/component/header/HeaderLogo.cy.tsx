import HeaderLogo from '@/components/header/logo'

describe('Header Logo', () => {
  beforeEach(() => {
    cy.mount(<HeaderLogo />)
  })

  it('should be displayed properly', () => {
    cy.get('[data-cy="logo-header"]').should('exist').and('be.visible')
  })

  it('should display correct text', () => {
    cy.get('[data-cy="logo-header"]').should('have.text', 'Forent')
  })

  it('should have the correct link', () => {
    cy.get('[data-cy="logo-header"]').should('have.attr', 'href').and('include', '/')
  })
})
