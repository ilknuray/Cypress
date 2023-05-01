/// <reference types="cypress" />

describe('Check boxes',() => {

    it('TestCase 1 Single TextBox',() => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.pl/index.php?id_category=3&controller=category"]').click()
    //first()=eq(0) ilk elemente tiklar
    cy.get('#layered_category_4').should('not.be.checked')
    //not.be.checked tikli olmadigini kontrl eder.test eder
    cy.get('#layered_category_4').check()
    cy.get('#layered_category_4').should('be.checked')
    cy.get('#layered_category_4').uncheck()
    cy.get('#layered_category_4').should('not.be.checked')


    })
    it('Test Case  all check boxes 1',() => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.pl/index.php?id_category=3&controller=category"]').click()
       cy.get("input[type='checkbox']").check()
       cy.wait(3000)
       cy.get("input[type='checkbox']").uncheck()
       cy.get("input[type='checkbox']").should('not.be.checked')




    })
    it.only('Test Case  All checkboxes 2',() => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.pl/index.php?id_category=3&controller=category"]').click()

        cy.get("input[type='checkbox']").eq(0).check()

        cy.get("input[type='checkbox']").eq(4).check()
        cy.get("input[type='checkbox']").eq(11).check()
        cy.get("input[type='checkbox']").uncheck()
        cy.get("input[type='checkbox']").should('not.be.checked')



    })
    it('Test Case 4',() => {



    })



})