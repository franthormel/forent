import React from 'react'
import AuthenticationWrapper from '../../components/AuthenticationWrapper'

describe('<AuthenticationWrapper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AuthenticationWrapper />)
  })
})