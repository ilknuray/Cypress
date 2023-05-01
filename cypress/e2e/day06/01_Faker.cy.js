/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
describe('',() => {

    it('',() => {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get('.login').click()
        let email =faker.internet.email()
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate > span').click()

        cy.get('#id_gender2').click()
       let firstname =faker.name.firstname()
       cy.get('#customer_firstname').type(firstname)
        
       let lastname= faker.name.lastName()
       cy.get('#customer_lastname').type(lastname)






    })
    it('',() => {



    })



})
