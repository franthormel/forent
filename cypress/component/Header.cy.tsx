import Header from '@/components/header';

describe('Header', () => {
  it('works', () => {
    cy.mount(<Header value='Header' />)
    cy.get('[data-cy="header"]').should('have.text', 'Header')
  })
})
