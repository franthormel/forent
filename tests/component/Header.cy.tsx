/// <reference types="cypress" />

import React from 'react'
import Header from '../../components/Header'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header text='header'/>)
  })
})