/// <reference types="cypress" />

describe('Suggested element',() => {

    it('Test Case1',() => {
     cy.visit('https://www.google.com/')
     cy.get('#L2AGLb > .QS5gu').click()
     cy.get('.SDkEP').type('Yahoo')
     cy.get('#ERWdKc > .wM6W7d > span').contains('mail').click()


    })
    it.skip('Test Case 2',() => {

    cy.visit('https://www.amazon.com/')

    })



})