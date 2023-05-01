/// <reference types="cypress" />

describe('Suggested element 2',() => {

    it('Test Case',() => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.get('#search_query_top').type('dress')
    cy.wait(3000)
    cy.get("li[class='ac_even ac_over']").click()


    })
    



})