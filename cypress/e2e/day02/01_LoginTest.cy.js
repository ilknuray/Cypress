/// <reference types="cypress" />

describe('Koala Resort Hotel',() => {

    it('Log in Testi',() => {
     cy.visit('https://qa-environment.koalaresorthotels.com/')
     //seleniumdaki get komutu dur
     cy.get('#navLogon > .nav-link').click()
     cy.url().should('include','Account/Logon')
     //cy.contains('Log in')=>DOM da login text ini bulup tikla;Metni text olarak arar
     
     //userName=manager
     cy.get('#UserName').type('Manager')
     cy.get('#Password').type('Manager1!{enter}')
     //cy.get('#btnSubmit').click()

    })
    


})