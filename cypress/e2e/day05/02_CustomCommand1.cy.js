/// <reference types="cypress" />

describe('Custom command',() => {

    it('Positive login',() => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('#email').type('ilknuray1318@gmail.com')
        cy.get('#passwd').type('123ilknur')
        cy.get('#SubmitLogin > span').click()



    })
    
    it.only('',() => {
      cy.ap_login('ilknuray1318@gmail.com','123ilknur')
      cy.get('ol > li').should('contain.text','Authentication failed.')

    })
    it('Negative login',() => {



    })



})