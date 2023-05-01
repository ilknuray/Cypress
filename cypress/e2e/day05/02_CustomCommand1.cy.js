/// <reference types="cypress" />

describe('Custom command',() => {

    it.only('Positive login',() => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.get('.login').type('123murat123@gmail.com')
        cy.get('#passwd').type('123murat123')
        cy.get('#SubmitLogin > span').click()



    })
    it('Negative login',() => {



    })



})