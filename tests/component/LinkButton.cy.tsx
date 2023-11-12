/// <reference types="cypress" />

import React from 'react'
import LinkButton from '../../components/LinkButton'

describe('<LinkButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LinkButton href='' text='Link button'/>)
  })
})