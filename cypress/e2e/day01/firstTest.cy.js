/// <reference types="cypress" />

describe('My First Test',() => {
    //describe tanimlamak demektir.Testi bu sekilde tanimlariz//mocha dan gelir
   

    it('URL Test',() => {
    

    cy.visit('https://www.google.com/')
    cy.url().should('include','google')//meli mali demektir ve include iceriyormu demektir.
    //URL google iceriyormu demektir

    })

    it('Title Test',() => {
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('eq','Google')



    })



})