/// <reference types="cypress" />

describe('My First Test',function(){
    
    it('URL Test',function() {
    

    cy.visit('https://www.google.com/')
    cy.url().should('include','google')//meli mali demektir ve include iceriyormu demektir.
    //URL google iceriyormu demektir

    })

    it('Title Test',function(){
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('eq','Google')



    })



})