/// <reference types="cypress" />

describe('Scrool Testi',() => {

    it('Test case 1 Scrolintoview',() => {
     cy.visit('https://qa-environment.koalaresorthotels.com/')
     cy.get('.col-md-7 > .mb-4').scrollIntoView()
     //LOcate ettigimiz yzerin altina sayfayi kaydirir
     cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView({duration:4000})

     //belirledigim yere belirledigim surede gelir
     //scrolto x,y
     cy.scrollTo(0,0)
     cy.scrollTo(0,500)
     cy.scrollTo('500px')

    })
   



})