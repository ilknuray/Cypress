/// <reference types="cypress" />

describe('Selectors Examples',() => {

    it('Css Selectors',() => {
    cy.visit('https://www.amazon.com/')
    //1)By Tag Name
    cy.get('input')

   //2)By Id
   cy.get('#twotabsearchtextbox')

   //3)By Class
   cy.get('.nav-search-field ')

   //4)By Attribute name and Value
   cy.get("input[type='text']")

   //5)By 2 Attribute

   cy.get("input[type='text'][id='twotabsearchtextbox']")

    })
    it.only('X Path',() => {
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()

        //6)By Xpath
        cy.xpath("//*[@class='gb_t']").should('include.text','Gmail')




    })



})