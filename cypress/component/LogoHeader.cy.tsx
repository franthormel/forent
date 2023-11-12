import React from 'react'
import LogoHeader from '../../components/LogoHeader'

describe('<LogoHeader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LogoHeader />)
  })
})