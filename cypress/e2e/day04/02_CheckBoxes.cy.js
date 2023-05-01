/// <reference types="cypress" />

describe('Check boxes',() => {

    it('TestCase 1',() => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    //first()=eq(0) ilk elemente tiklar
    cy.get('#layered_category_4').should('not.be.checked')
    //not.be.checked tikli olmadigini kontrl eder.test eder
    

    })
    it('Test Case 2',() => {



    })
    it('Test Case 3',() => {



    })
    it('Test Case 4',() => {



    })



})