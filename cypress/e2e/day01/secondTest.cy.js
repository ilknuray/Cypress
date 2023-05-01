/// <reference types="cypress" />

context('My Second Test',() => {//describe yerine context kullanabiliriz
    beforeEach('Her Testten Once Calisacak', ()=>{
        cy.visit('/')
    })
    

    it('URL Test',() => {
    cy.url().should('include','google')
    cy.url().should('eq','https://www.google.com/')


    })

    it('Title Test',() => {
       cy.title().should('include','Google')
       cy.title().should('equal','Google')


    })
    it('Search Test',() => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.SDkEP').type('Cypress.io{enter}')


        

   

    })
    it('Search Test',() => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.SDkEP',{timeout:3000}).type('Cypress.io{enter}')
        cy.get('.FPdoLc > center > .gNO89b',{timeout:3000}).click()
    

   

    })



})