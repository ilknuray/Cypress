/// <reference types="cypress" />

describe('DropDown',() => {

    it('Test Case',() => {
     cy.visit('https://the_internet.herokuapp.com/dropdown')
     cy.select('Option 1').should('have.value','1')
     cy.select('Option 2').should('have.value','2')



    })
    


})