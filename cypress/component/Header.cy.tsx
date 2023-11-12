import React from 'react'
import Header from '../../components/Header'

describe('<Header />', () => {
  it('works', () => {
    cy.mount(<Header text='header-text' />)
    cy.get('[data-cy="header"').should('have.text', 'header-text')
  });
})