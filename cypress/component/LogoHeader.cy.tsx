import React from 'react'
import LogoHeader from '../../components/LogoHeader'

describe('<LogoHeader />', () => {
  it('works', () => {
    cy.mount(<LogoHeader />)
    cy.get('[data-cy="logo-header"]').should('have.text', 'Forent')
  })
})