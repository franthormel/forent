import React from 'react'
import SignOutButton from '../../components/SignOutButton'

describe('<SignOutButton />', () => {
  it('works', () => {
    cy.mount(<SignOutButton />)
    cy.get('[data-cy="sign-out-button"]').should('have.text', 'Sign Out')
  })
})