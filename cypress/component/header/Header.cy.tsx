import Header from '@/components/header';

describe('Header', () => {
  it('works', () => {
    cy.mount(<Header value='Header' dataCy='header' />)
    cy.get('[data-cy="header"]').should('exist').and('be.visible').and('have.text', 'Header')
  })
})
