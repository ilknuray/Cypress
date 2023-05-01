/// <reference types="cypress" />

describe('Custom command',() => {

    it('Amazon search', () => {
     
     //cy.amazonSearch('iphone')
     cy.amazonSearch('iphone')
     cy.get('.a-color-state').should('include.text','iphone')


    })




})