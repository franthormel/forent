import SignOutButton from '@/components/button-auth/SignOutButton';

describe('<SignOutButton />', () => {
  it('works', () => {
    cy.mount(<SignOutButton />)
    cy.get('[data-cy="signout-button"]').should('have.text', 'Sign Out')
  })
})