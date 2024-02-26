import SignOutButton from '@/components/auth-buttons/SignOutButton';

describe('<SignOutButton />', () => {
  it('works', () => {
    cy.mount(<SignOutButton />)
    cy.get('[data-cy="signout-button"]').should('have.text', 'Sign Out')
  })
})