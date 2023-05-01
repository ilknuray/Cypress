/// <reference types="cypress" />

describe('Multiple windows',() => {

    it('ikinci siteye gecis Rrmovind attribute',() => {
        cy.visit('https://the-internet.herokuapp.com/windows')
       // cy.get('.example > a').click()

        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.get('h3').should('be.visible')




    })
    it('',() => {



    })



})