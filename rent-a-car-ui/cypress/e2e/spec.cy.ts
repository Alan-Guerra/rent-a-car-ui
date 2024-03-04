/// <reference types="cypress" />
describe('template spec', () => {
  it('it should render the root react component', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#root').should('exist')
  })

  it('visiting Catalog, should render Catalog component', () =>{
    cy.visit('http://localhost:5173/catalog')
    cy.get('[data-cy=catalogPage]').should('exist')
  })

  it('when clicking on link, it should visit the page', () => {
    cy.visit('http://localhost:5173/catalog')
    let button = cy.get('[data-cy=sidebar-link-Car]')
    button.should('exist')
    button.click()
    cy.url().should('include', '/car')

    button = cy.get('[data-cy=sidebar-link-Rent]')
    button.should('exist')
    button.click()
    cy.url().should('include', '/rent')

    button = cy.get('[data-cy=sidebar-link-Settings]')
    button.should('exist')
    button.click()
    cy.url().should('include', '/settings')

  })

  
})