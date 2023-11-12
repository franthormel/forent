import React from 'react'
import SignOutButton from '../../components/SignOutButton'

describe('<SignOutButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignOutButton />)
  })
})