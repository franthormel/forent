import React from 'react'
import LinkButton from '../../components/LinkButton'

describe('<LinkButton />', () => {
  it('works', () => {
    cy.mount(<LinkButton href='http://example.com/' text='Link button' />)
    cy.get('[data-cy="link-button"]').as('link')
    cy.get('@link').should('have.text', 'Link button')
  })
})