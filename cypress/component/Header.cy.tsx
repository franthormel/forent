import Header from '@/components/header/Header';

describe('Header', () => {
  it('works', () => {
    cy.mount(<Header value='Header' />)
    cy.get('[data-cy="header"]').should('have.text', 'Header')
  })
})
